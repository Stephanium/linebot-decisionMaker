# linebot-decisionMaker



## 支援的指令

### 呼叫

當bot被呼叫時給的回應

```
@<bot名稱>
```

### 決定

開始一個選擇動作

```
幫我決定
```

### 截止

結束一個選擇動作

```
截止
```

### 統計

輸出目前選項內容

```
統計
```

### 結果

依照目前選項內容隨機挑選其中一項

```
結果
```

### 給選項

點自己想要的內容，一人限提供一次

```
選項<選項內容>
```

範例：

```
選項紅茶拿鐵
選項 鮮奶茶
```

### 取消選項

取消「自己」的選項

```
取消
```

## 目錄結構

整個目錄結構大概是這樣：

```
bottender-order-example/
  actions/
  node_modules/
  index.js
  bottender.config.js
  handler.js
  package.json
  README.md
  yarn.lock
  .env
```

## NPM Scripts

有兩個預先寫好的指令：

### `npm run dev`

用 [nodemon](https://github.com/remy/nodemon) 執行 Bot，會監控修改進行重啟，適合開發使用。

### `npm start`

執行 Bot。
