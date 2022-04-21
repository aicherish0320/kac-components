- 1. 所有组件一次性全部导入并且作为插件使用
  - 建立一个入口文件
  - 将所有组件导入，作为一个数组，创建一个 install 函数，循环调用 app.component
  - 默认导出一个插件（这个 install 函数）

```js
import KacComponents from 'kac-components'
app.use(KacComponents)
```

- 2. 单个组件导入并且作为插件使用
  - 每个组件新建一个文件夹，并且创建一个单独的 index.ts 文件
  - 每个组件设计成一个插件 （一个 object 拥有 install 方法）
  - 在全局入口文件导出

```js
import { KaText } from 'kac-components'
app.use(KaText)
```
