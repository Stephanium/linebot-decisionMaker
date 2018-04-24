module.exports = async context => {
  const sortedOrders = context.state.選項
    // 按照文字排序
    .sort((a, b) => a.order.localeCompare(b.order))
    .reduce((prev, o) => {
      const { name, order } = o;
      return { ...prev, [order]: [name] };
    }, {});

  const orderNames = Object.keys(sortedOrders);
  const r = Math.floor(Math.random() * orderNames.length);
  const n = orderNames[r];
  // 稍微排版一下，一行一種物品
  if (sortedOrders !== null) {
    await context.replyText(`我決定選 ${n} `);
  } else {
    // 避免沒有選項傳送空字串出現錯誤
    await context.replyText('沒有選項QQ');
  }
};
