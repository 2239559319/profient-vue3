---
sidebar_position: 1
title: 3 首次渲染
id: readme
---

# 3.1 app的创建

本节开始进入`vue3`的首次渲染分析。对于`patch`函数的细节本节会直接跳过，只讨论相关的代码。

在[2.3节](../2-yuan-ma-gai-shu/run.md)中讲到首次渲染分为两步一步是`app`的创建一步是渲染。

### app创建

在我们的代码里面都有如下的代码

{% code lineNumbers="true" %}
```js
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');
```
{% endcode %}

`createApp`函数返回的就是[app](../2-yuan-ma-gai-shu/datastructure.md#app)对象。`mount`函数实际上是有返回值的为了区分将上图中的`craeteApp`和`mount`分开得到。`app` 的创建是下图中的第5行。

{% code lineNumbers="true" %}
```js
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const app = createApp(App);

app.mount('#app');
```
{% endcode %}

