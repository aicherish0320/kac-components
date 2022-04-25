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

### npm 依赖的分类

- dependencies
  - 运行项目业务逻辑需要依赖的第三方库
  - npm install 模块名称的时候都会被解析，下载
- devDependencies
  - 开发模式工作下依赖的第三方库
  - 单元测试、语法转换、lint 工具、程序构建、本地开发等等
- peerDependencies
  - 需要核心依赖库，不能脱离依赖库单独使用（库在使用过程中必须要使用的依赖，没安装的话，会提示警告）

### package.json

- main -> umd
- module -> esm

# CI/CD 的概念

业务组件库的开发和发布是随着一系列任务进化的

- 本地 commit 钩子函数完成 commit 验证
- 代码 push 到远端以后
- 跑特定的 test （不仅仅是本机的 unit test，也可能是 E2E test）
- test 通过以后检查是否有新的 tag，假如有就自动 publish 一个新的版本
- 甚至还有更多，自动部署文档站点等等

## CI (Continuous integration) - 持续集成

持续集成指的是，频繁地将代码集成到主干。一旦开发人员对应用所做的更改被合并，系统就会通过自动构建应用并运行不同级别的自动化测试来验证这些更改，确保这些更改没有对应用造成破坏

持续集成的目的，就是让产品可以快速迭代，同时还能保持高质量

## CD (Continuous Delivery) - 持续交付

持续交付指的是，频繁地将软件的新版本，交付给质量团队或者用户，以供评审

## CD (Continuos Deployment) - 持续部署

持续部署是持续交付的下一步，指的是代码通过评审以后，自动部署到生产环境
