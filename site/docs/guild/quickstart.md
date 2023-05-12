# 快速开始

- 安装 pnpm

```
npm install pnpm -g
```

- 安装依赖

```
pnpm install
```

- 打包示例组件库

**注意:** 这里需要先执行一次打包,因为组件库文档引用了打包后的文件

```
pnpm run pacsdesignvue:build
```

- 启动测试项目

```
pnpm run pacsdesignvue:dev
```

- 发布

```
// 查看npm镜像源地址
npm config get registry
// 检查 npm 源，如果是淘宝源，则需要改回 npm 源
// npm config set registry https://registry.npmjs.org/
// npm login 

pnpm run pacsdesignvue:build

pnpm run publish:pacsdesignvue

```
