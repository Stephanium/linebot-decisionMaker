module.exports = async context => {
  const 回應 = [
    '你在叫我嗎？啾咪>///<',
    '喲！！！\n我來了(￣▽￣)/',
    '嗨嗨嗨~ 怎麼了？\n又有選擇障礙了嗎？',
  ];
  const r = Math.floor(Math.random() * 回應.length);
  const n = 回應[r];
  await context.replyText(`${n}`);
};
