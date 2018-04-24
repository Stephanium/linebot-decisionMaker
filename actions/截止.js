module.exports = async context => {
  const { userId, displayName } = context.session.user;
  const total = context.state.選項.length;
  const id = Math.ceil(Math.random() * total - 1);
  const result = context.state.選項[id];

  // 判斷說出截止指令的人是不是決定的人
  if (context.state.主持人.userId === userId) {
    context.replyText(
      `context.state.選項.length 為 ${
        context.state.選項.length
      } \n我決定選 ${result} `
    );
    // 把 state 重設
    context.resetState();
    await context.replyText('截止囉!');
  } else {
    await context.replyText(`${displayName} 不是你開的決定\n不讓你截止！哼！`);
  }
};
