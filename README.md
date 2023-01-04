# TypeScript-JavaScript-Advanced-SoftUni-Course

### :scroll: Description

In this course the main aspect is learning the core syntax, working with arrays, matrices, objects, classes and function writing. More advanced conceptions like function context, explicit binding, event loop, DOM tree manipulation and event handling. Main OOP principles with JavaScript and conceptions like inheritance, object composition and prototype chain and unit testing.

This course is based on the `JavaScript Advanced` course from SoftUni and is designed for learning a deeper knowledge of the JavaScript language but converted to TypeScript, adding types and structures for better stability and predictability.

<hr>

### :bookmark_tabs: Subjects included in the course

- Syntax, Functions and Statements
- Arrays and Nested Arrays
- Objects and Composition
- DOM Introduction
- DOM Manipulations and Events
- Advanced Functions
- Unit Testing and Error Handling
- Classes
- Prototypes and Inheritance

<hr>

### :woman_juggling: Scripts

Before your start running the scripts you need to install [NodeJS](https://nodejs.org/en/)

`npm run test`

Runs the unit tests in the project using Mocha. The `--parallel` option specifies that the tests can be run in parallel.

`npm run clean`

This is a cleanup script that is used to delete files or folders in the source directory.
**rimraf** is a utility that is used to delete directories.
**cross-var** is a command that is used to execute commands on different operating systems.

`npm run copy-html-files`

This npm script serves to copy files with the extension `.ts` or `.docx` that are newer than those already available in the destination directory.
After the `copyfiles` command is executed, the `echo` command is executed, which outputs the `html files copied` message.

I don't use **webpack** because I use `clean` and `copy-html-files` scripts.

`npm run build`

This npm script serves to test the code, clean up the old output, compile the TypeScript files into JavaScript files, and copy the HTML files.

`npm run prettier`

А code formatter that automatically formats code to make it easier to read.

`npm run format`

When the **format** command is executed, the **prettier** command with `--write` argument will be executed. This will make prettier format the files it searches for and save the changes to the files themselves. This way you will save the changes that prettier has made without having to manually keep track of the formatting.

`npm run check-format`

Prettier will format the files it searches for, but won't save the changes to the files themselves. Instead, it will list the files that are different from the format that prettier expects.

`npm run ts-lint`

Command that runs the linting tool ESLint on all TypeScript files in the current directory and its subdirectories.

`npm run ts-validate`

The TypeScript Compiler command is a TypeScript compiler that converts TypeScript code into JavaScript. The `--noEmit` option means that the compiler will not generate JavaScript files, but will only check the syntax and types of TypeScript code. This can be used as part of the TypeScript code validation process without generating JavaScript files.

`npm run validate`

The `validate` script is run using the `npm-run-all` package, and the `--parallel` flag tells `npm-run-all` to run the specified scripts in parallel, meaning that they will all be run at the same time. The scripts being run in parallel are `check-format`, `ts-lint`, and `ts-validate`. These scripts might perform tasks such as checking the code formatting, linting the TypeScript code, and validating the TypeScript code for errors.

<hr>

## :briefcase: Technologies used

[![Technologies](https://skills.thijs.gg/icons?i=ts,js,html,css)](https://skills.thijs.gg)
