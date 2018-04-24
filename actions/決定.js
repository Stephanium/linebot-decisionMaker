module.exports = async context => {
  const { displayName } = context.session.user;

  // 設定為決定初始 state
  context.setState({
    決定中: true,
    主持人: context.session.user,
    選項: [],
  });

  await context.replyText(`好啊！\n大家幫忙給 ${displayName} 一些選項吧！`);
};
