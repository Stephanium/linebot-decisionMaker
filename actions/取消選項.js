module.exports = async context => {
  const { userId, displayName } = context.session.user;

  // 檢查選項裡面有沒有這個人給過的東西
  if (context.state.選項.some(obj => obj.userId === userId)) {
    // 取消就是把選項裡面這個人的東西過濾掉
    context.setState({
      ...context.state,
      選項: context.state.選項.filter(order => order.userId !== userId),
    });
    await context.replyText(`${displayName} 幫你取消囉!`);
  } else {
    await context.replyText(
      `${displayName} 你沒給過無法取消，輸入「選項ooo」來給選項`
    );
  }
};
