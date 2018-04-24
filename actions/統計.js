module.exports = async context => {
  const sortedOrders = context.state.選項
    // 按照文字排序
    .sort((a, b) => a.order.localeCompare(b.order))
    .reduce((prev, o) => {
      const { name, order } = o;

      // 檢查有沒有人給過一樣的東西
      const match = Object.keys(prev).find(k => order === k);
      if (match) {
        // 有人的話就把名字接在 array 後面
        return {
          ...prev,
          [order]: prev[order].concat(name),
        };
      }
      // 或者新開 array
      return { ...prev, [order]: [name] };
    }, {});

  const orderNames = Object.keys(sortedOrders);

  // 稍微排版一下，一行一種物品
  const result = orderNames
    .map(
      o =>
        `${o} 有 ${sortedOrders[o].length} 個，是 ${sortedOrders[o].join(
          ', '
        )} 說的`
    )
    .join('\n');

  // 避免沒有選項傳送空字串出現錯誤
  await context.replyText(result || '沒有選項QQ');
};
