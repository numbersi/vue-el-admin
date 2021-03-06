module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jquery: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': [
      'off',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/no-v-html': 'off',
    'vue/name-property-casing': ['error', 'PascalCase'], // 强制驼峰命名法
    'vue/html-closing-bracket-newline': [
      'off',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'never',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/html-indent': [
      'off',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/script-indent': [
      'off',
      2,
      {
        switchCase: 1,
        baseIndent: 1,
      },
    ],
    // Possible Errors
    'no-cond-assign': 'off', // 禁止在条件语句中出现赋值操作符
    'no-console': 'off', // 禁用 console
    'no-control-regex': 'error', // 禁止在正则表达式中使用控制字符
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 禁用 debugger
    'no-extra-semi': 'off', // 禁用不必要的分号
    'no-dupe-args': 'error', // 禁止在 function 定义中出现重复的参数
    'no-dupe-keys': 'error', // 禁止在对象字面量中出现重复的键
    'no-duplicate-case': 'error', // 禁止出现重复的 case 标签
    'no-empty-character-class': 'error', // 禁止在正则表达式中使用空字符集
    'no-ex-assign': 'error', // 禁止对 catch 子句中的异常重新赋值
    'no-extra-boolean-cast': 'error', // 禁止不必要的布尔类型转换
    'no-extra-parens': ['error', 'functions'], // 禁止冗余的括号
    'no-func-assign': 'error', // 禁止对 function 声明重新赋值
    'no-inner-declarations': ['error', 'functions'], // 禁止在嵌套的语句块中出现变量或 function 声明
    'no-invalid-regexp': 'error', // 禁止在 RegExp 构造函数中出现无效的正则表达式
    'no-irregular-whitespace': 'error', // 禁止不规则的空白
    'no-obj-calls': 'error', // 禁止将全局对象当作函数进行调用
    'no-regex-spaces': 'error', // 禁止正则表达式字面量中出现多个空格
    'no-sparse-arrays': 'error', // 禁用稀疏数组
    'no-unexpected-multiline': 'error', // 禁止使用令人困惑的多行表达式
    'no-unreachable': 'error', // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
    'no-unsafe-finally': 'error', // 禁止在 finally 语句块中出现控制流语句
    'use-isnan': 'error', // 要求使用 isNaN() 检查 NaN
    'valid-typeof': 'error', // 强制 typeof 表达式与有效的字符串进行比较

    // Best Practices
    'accessor-pairs': 'error', // 强制getter/setter成对出现在对象中
    curly: ['error', 'multi-line'], // 要求遵循大括号约定
    'dot-location': ['error', 'property'], // 强制在点号之前或之后换行
    eqeqeq: ['error', 'allow-null'], // 要求使用 === 和 !==
    'guard-for-in': 'error', // 需要约束 for-in
    'no-caller': 'error', // 禁用 caller 或 callee
    'no-empty-pattern': 'error', // 禁止使用空解构模式
    'no-eval': 'error', // 禁用 eval()
    'no-extend-native': 'error', // 禁止扩展原生对象
    'no-extra-bind': 'error', // 禁止不必要的函数绑定
    'no-fallthrough': 'error', // 禁止 case 语句落空
    'no-floating-decimal': 'error', // 禁止浮点小数
    'no-implied-eval': 'error', // 禁用隐式的eval()
    'no-invalid-this': 'off', // 禁止 this 关键字在类或类对象之外出现
    'no-iterator': 'error', // 禁用迭代器
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }], // 禁用标签语句
    'no-lone-blocks': 'error', // 禁用不必要的嵌套块
    'no-multi-spaces': 'error', // 禁止出现多个空格
    'no-multi-str': 'error', // 禁止多行字符串
    'no-new-wrappers': 'error', // 禁止原始包装实例
    'no-octal': 'error', // 禁用八进制字面量
    'no-octal-escape': 'error', // 禁止在字符串字面量中使用八进制转义序列
    'no-proto': 'error', // 禁用__proto__
    'no-redeclare': 'error', // 禁止重新声明变量
    'no-return-assign': ['error', 'except-parens'], // 禁止在返回语句中赋值
    'no-self-assign': 'error', // 禁止自身赋值
    'no-self-compare': 'error', // 禁止自身比较
    'no-sequences': 'error', // 不允许使用逗号操作符
    'no-throw-literal': 'error', // 限制可以被抛出的异常
    'no-unmodified-loop-condition': 'error', // 禁用一成不变的循环条件
    'no-useless-call': 'error', // 禁用不必要的 .call() 和 .apply()
    'no-useless-escape': 'off', // 禁用不必要的转义
    'no-with': 'error', // 禁用 with 语句
    'wrap-iife': ['error', 'any'], // 需要把IIFE(立即执行的函数)包裹起来
    yoda: ['error', 'never'], // 要求或者禁止Yoda条件

    // Variables
    'no-delete-var': 'error', // 禁止删除变量
    'no-label-var': 'error', // 禁用与变量同名的标签
    'no-shadow-restricted-names': 'error', // 关键字不能被遮蔽
    'no-unused-vars': ['error', { vars: 'all', args: 'none' }], // 禁止未使用过的变量
    'no-undef': 'error', // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef-init': 'error', // 禁止初始化变量值为 undefined

    // Stylistic Issues
    'array-bracket-newline': 'off', // 在数组开括号后和闭括号前强制换行
    'array-bracket-spacing': ['error', 'never'], // 禁止或强制在括号内使用空格
    'array-element-newline': 'off', // 强制数组元素间出现换行
    'block-spacing': ['error', 'always'], // 禁止或强制在代码块中开括号前和闭括号后有空格
    'brace-style': ['error', '1tbs', { allowSingleLine: true }], // 大括号风格要求
    camelcase: ['off', { properties: 'always' }], // 要求使用驼峰式拼写法
    'comma-dangle': ['error', 'always-multiline'], // 要求或禁止使用拖尾逗号
    'comma-spacing': ['error', { before: false, after: true }], // 强制在逗号周围使用空格
    'comma-style': ['error', 'last'], // 逗号风格
    'computed-property-spacing': 'error', // 禁止或强制在计算属性中使用空格
    'eol-last': 'error', // 要求或禁止文件末尾保留一行空行
    'func-call-spacing': 'error', // 要求或禁止在函数标识符和其调用之间有空格
    'jsx-quotes': ['error', 'prefer-single'], // 强制在 JSX 属性中使用一致的单引号或双引号
    'key-spacing': ['error', { beforeColon: false, afterColon: true }], // 强制在对象字面量的键和值之间使用一致的空格
    'keyword-spacing': ['error', { before: true, after: true }], // 强制关键字周围空格的一致性
    'linebreak-style': 'off', // 强制使用一致的换行符风格
    'max-len': [
      'off',
      {
        code: 140,
        tabWidth: 2,
        ignoreUrls: true,
        ignorePattern: '^goog.(module|require)',
      },
    ], // 强制行的最大长度
    'new-cap': ['error', { newIsCap: true, capIsNew: false }], // 要求构造函数首字母大写
    'new-parens': 'error', // 要求调用无参构造函数时带括号
    'no-array-constructor': 'error', // 禁止使用 Array 构造函数
    'no-mixed-spaces-and-tabs': 'error', // 禁止使用 空格 和 tab 混合缩进
    'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
    'no-new-object': 'error', // 禁止使用 Object 构造函数
    'no-tabs': 'error', // 禁用 tab
    'no-trailing-spaces': 'error', // 禁用行尾空白
    'no-unneeded-ternary': ['error', { defaultAssignment: false }], // 禁止可以表达为更简单结构的三元操作符
    'no-whitespace-before-property': 'error', // 禁止属性前有空白
    'object-curly-spacing': ['error', 'always', { objectsInObjects: true }], // 强制在花括号中使用一致的空格
    'one-var': ['error', { initialized: 'never' }], // 强制函数中的变量在一起声明或分开声明
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ], // 强制操作符使用一致的换行符风格
    'padded-blocks': ['error', 'never'], // 要求或禁止块内填充
    'quote-props': ['error', 'as-needed'], // 要求对象字面量属性名称使用引号
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ], // 强制使用一致的反勾号、双引号或单引号
    semi: ['error', 'never'], // 要求或禁止使用分号代替 ASI
    'semi-spacing': ['error', { before: false, after: true }], // 强制分号前后有空格
    'space-before-blocks': ['error', 'always'], // 要求或禁止语句块之前的空格
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never' },
    ], // 要求或禁止函数圆括号之前有一个空格
    'space-in-parens': ['error', 'never'], // 禁止或强制圆括号内的空格
    'space-infix-ops': 'error', // 要求中缀操作符周围有空格
    'space-unary-ops': ['error', { words: true, nonwords: false }], // 要求或禁止在一元操作符之前或之后存在空格
    'spaced-comment': [
      'error',
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ',',
        ],
      },
    ], // 要求或禁止在注释前有空白
    'switch-colon-spacing': 'error', // 强制在 switch 的冒号左右有空格

    // ECMAScript 6
    'arrow-parens': ['error', 'always'], // 要求箭头函数的参数使用圆括号
    'arrow-spacing': ['error', { before: true, after: true }], // 要求箭头函数的箭头之前或之后有空格
    'constructor-super': 'error', // 验证构造函数中 super() 的调用
    'no-class-assign': 'error', // 不允许修改类声明的变量
    'no-const-assign': 'error', // 不允许改变用const声明的变量
    'no-dupe-class-members': 'error', // 不允许类成员中有重复的名称
    'no-new-symbol': 'error', // 禁止 Symbolnew 操作符和 new 一起使用
    'no-this-before-super': 'error', // 在构造函数中禁止在调用super()之前使用this或super
    'no-useless-computed-key': 'error', // 禁止在对象中使用不必要的计算属性
    'no-useless-constructor': 'error', // 禁用不必要的构造函数
    'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'prefer-const': 'error', // 建议使用const
    'prefer-rest-params': 'error', // 建议使用剩余参数代替 arguments
    'prefer-spread': 'error', // 建议使用扩展语法而非.apply()
    'rest-spread-spacing': 'error', // 强制剩余和扩展运算符及其表达式之间有空格
    'template-curly-spacing': ['error', 'never'], // 强制模板字符串中空格的使用
    'generator-star-spacing': ['off', 'after'], // 强制 generator 函数中 * 号周围有空格
    'yield-star-spacing': ['error', 'after'], // 强制在 yield* 表达式中 * 周围使用空格

    // Deprecated
    'no-native-reassign': 'error',
    'no-negated-in-lhs': 'error',
    'no-spaced-func': 'error',

    // Node.js and CommonJS
    'handle-callback-err': [2, '^(err|error)$'], // 强制回调错误处理
    'no-new-require': 'error', // 不允许 new require
    'no-path-concat': 'error', // 当使用 _dirname 和 _filename 时不允许字符串拼接
  },
}
