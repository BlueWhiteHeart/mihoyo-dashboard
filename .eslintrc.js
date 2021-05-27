module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
    "plugin:prettier/recommended", // 添加 prettier 插件
    "plugin:jest/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // js语句结尾必须使用分号
    semi: ["off", "always"],
    // 三等号
    eqeqeq: 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    "spaced-comment": 0,
    // 关键字后面使用一致的空格
    "keyword-spacing": 0,
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": 0,
    // 引号类型
    quotes: [0, "single"],
    // 禁止出现未使用过的变量
    // "no-unused-vars": 0,
    // 要求或禁止末尾逗号
    "comma-dangle": 0,
  },
};
