---
title: 2.1 源码结构
sidebar_position: 2.1
---

# 源码结构

`packages`目录下面的包的作用见下表

| 包目录               | 作用                                |
| -------------------- | ----------------------------------- |
| compiler-core        | 先忽略                              |
| compiler-dom         | 先忽略                              |
| compiler-sfc         | 先忽略                              |
| compiler-ssr         | 先忽略                              |
| dts-test             | 直接忽略                            |
| reactivity           | 响应式相关代码，比如`ref`等都在这里 |
| reactivity-transform | 先忽略                              |
| runtime-core         | 渲染的核心代码（于平台无关）        |
| runtime-dom          | dom渲染有关代码                     |
| runtime-test         | 直接忽略                            |
| server-renderer      | 先忽略                              |
| sfc-playground       | 直接忽略                            |
| shared               | 公共工具函数                        |
| size-check           | 直接忽略                            |
| template-explorer    | 直接忽略                            |
| vue                  | 包导出                              |
| vue-compat           | 直接忽略                            |

是不是感觉代码很多，别急，很多包实际上在代码运行的时候是用不到的，比如先忽略的包很多都是编译阶段使用的包在运行阶段是不会起任何作用的，这个以后在说。

## 核心包

对于非`ssr`的项目而言，核心的包只有以下四个

| 包目录       | 作用                                |
| ------------ | ----------------------------------- |
| reactivity   | 响应式相关代码，比如`ref`等都在这里 |
| runtime-core | 渲染的核心代码（于平台无关）        |
| runtime-dom  | dom渲染有关代码                     |
| shared       | 公共工具函数                        |
