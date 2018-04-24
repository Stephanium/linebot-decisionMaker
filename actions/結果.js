module.exports = async context => {
  const sortedOrders = context.state.選項
    // 按照文字排序
    .sort((a, b) => a.order.localeCompare(b.order))
    .reduce((prev, o) => {
      const { name, order } = o;
      return { ...prev, [order]: [name] };
    }, {});

  const orderNames = Object.keys(sortedOrders);

  // 稍微排版一下，一行一種物品
  const result = orderNames
    .map(o => `我決定選 ${o} ，是 ${sortedOrders[o].join(', ')} 說的`)
    .join('\n');

  // 避免沒有選項傳送空字串出現錯誤
  await context.replyText(result || '沒有選項QQ');
};
