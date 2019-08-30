# sm-wepy-plugin-file-min 插件

## 安装

```bash
npm install sm-wepy-plugin-file-min --save-dev
```

## 配置`wepy.config.js`

```javascript
const FileMinPlugin = require('sm-wepy-plugin-file-min')

// 在末尾添加：
module.exports.plugins.push(FileMinPlugin())

// 关闭压缩功能:
module.exports.plugins.push(FileMinPlugin({ enable: false }))
```
或者根据环境变量来判断：

```javascript
const isCompress = process.env.COMPRESS === 'compress';

if (isCompress) {
  module.exports.plugins.push(FileMinPlugin({}))
}
```

## 参数说明

你提供的配置选项 ```options``` 的 enable 字段 用于配置否关闭压缩功能。默认为开启


