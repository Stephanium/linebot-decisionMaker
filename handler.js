const { LineHandler } = require('bottender');

const 決定 = require('./actions/決定');
const 截止 = require('./actions/截止');
const 統計 = require('./actions/統計');
const 結果 = require('./actions/結果');
const 呼叫 = require('./actions/呼叫');
const 取消選項 = require('./actions/取消選項');
const 給選項 = require('./actions/給選項');

// 沒開始決定的狀態下，輸入「幫我決定」可以啟用機器人
const 未決定handler = new LineHandler()
  .onText('幫我決定', 決定)
  .onText('@底賽德', 呼叫)
// @<bot名稱>可自行更改
  .build();

// 已開始決定的狀態下，有四種指令可以用
const 決定中handler = new LineHandler()
  .onText('截止', 截止)
  .onText('統計', 統計)
  .onText('結果', 結果)
  .onText('取消', 取消選項)
  .onText(/^選項(.*)/, 給選項)
  .onText('@底賽德', 呼叫)
// @<bot名稱>可自行更改
  .build();

// 按照 state 決定現在的狀態要用哪個子 handler
module.exports = new LineHandler()
  .on(context => !context.state.決定中, 未決定handler)
  .on(context => context.state.決定中, 決定中handler)
  .build();
