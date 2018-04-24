// Handler Builder 中 onText() 如果使用 Regular Expression 會把 match 的結果傳入第二個參數
module.exports = async (context, match) => {
  const { userId, displayName } = context.session.user;

  // 檢查選項裡面有沒有這個人點過的東西
  if (context.state.選項.some(obj => obj.userId === userId)) {
    await context.replyText(
      `${displayName} 一個人做多只能給一個選項啦！還是你要取消之前那筆，可以輸入「取消」再給一次`
    );
  } else {
    // 去掉前後空白
    const order = match[1].trim();

    // 把選項塞進 state 中
    context.setState({
      ...context.state,
      選項: context.state.選項.concat({
        name: displayName,
        userId,
        order,
      }),
    });

    await context.sendText(`收到！ ${displayName} 你說的是 ${order}`);
  }
};
