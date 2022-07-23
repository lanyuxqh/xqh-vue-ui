![icon](https://raw.githubusercontent.com/lanyuxqh/xqh-vue-ui/main/public/favicon.ico)

# xqh-vue-ui 组件库

用 vue 写的组件库，包含 Button，Input，Select，Grid 等常见 UI 组件。

[xqh-vue-ui 使用文档](https://lanyuxqh.github.io/xqh-vue-ui-doc/)

<hr>

### 安装

#### 推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```
npm install xqh-vue-ui
```

or

```
yarn add xqh-vue-ui
```

### 引入

#### 需要注意的是 css 样式文件需要您单独引入。

```
import Vue from 'vue';
import xqhVueUI from 'xqh-vue-ui';
import 'xqh-vue-ui/dist/xqh-vue-ui.css';

Vue.use(xqhVueUI);
```

### 按需引用

#### 可以根据个人需要按需引用组件来使用。

```
import { xButton, xInput } from 'xqh-vue-ui'
```

### 开始使用~~

```
<x-button type="default" status="success">success</x-button>
<x-button type="primary" shape="square" icon="search"></x-button>
```
