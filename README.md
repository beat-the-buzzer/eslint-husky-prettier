# ESlint + Prettier + Husky 进行团队代码风格规范

## ESLint

## Prettier

开发过程中经常会遇到这样的问题：

LiLei修改了HanMeimei的代码，只改了一行，然后顺手使用format工具处理了一下，然后查看Git提交记录，发现Git中这个文件的每一行都有改动，原因是两人的format习惯不一样。LiLei使用Tab缩进，HanMeimei使用空格缩进。如果两人经常修改同一个文件，那么几乎每次合并都会有冲突。

为了解决这个问题，我们需要一个format的规范。虽然在ESLint中我们可以强制设置缩进、空格这些规则，但是我们希望专注于业务开发，而不是在调整代码格式规范上。

我们在`.prettierrc`文件中写下代码风格相关配置。

```json
{
	"printWidth": 90,
	"useTabs": false,
	"tabWidth": 2,
	"singleQuote": true,
	"semi": false,
	"trailingComma": "none",
	"bracketSpacing": true,
	"arrowParens": "avoid"
}
```

## Husky

我们可以使用这个工具，新增 Git Hooks，可以在提交之前做一些特殊处理。例如在代码提交之前，自动修复ESLint中的一些错误（不需要手动点击自动修复按钮），自动format代码（只需要在git提交的时候执行一次）

在package.json中新增下列配置：

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{vue,js}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  }
}
```

执行`npm install`的时候，其实就去执行了`node husky install`。

我们新增了一个commit之前的一个钩子，在提交之前，先对src下的vue和js文件执行修复格式错误和格式化的命令，然后再把修改后的内容进行提交操作。

至此，我们就完成了代码风格的规范。无论团队成员的习惯如何，提交到Git之后，始终都是同样规范的代码。