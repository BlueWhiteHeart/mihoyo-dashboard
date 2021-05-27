# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

### 米游社区

从 0 到 1 按照以下步骤来 1.架构搭建 2.代码规范 3.提交规范 4.单元测试 5.自动部署

### 技术栈

> 编程语言 TypeScript + JavaScript
> 构建工具 Vite2.x
> 前端框架 Vue3.x
> 路由工具 Vue Router
> 状态管理 Vuex
> UI 库 Vant
> CSS 预编译 Stylus/Sass/less
> HTTP 工具 Axios
> 代码规范 EditorConfig+Prettier+ESLint+Airbnb JavaScript Style Guid
> 提交规范 Commitizen + Commitlint
> 单元测试 vue-test-utils + jest + vue-jest + ts-jest
> 自动部署 GitHub Actions

<!-- > 打包工具 webpack -->
<!-- > Git Hook 工具：husky + lint-staged -->
