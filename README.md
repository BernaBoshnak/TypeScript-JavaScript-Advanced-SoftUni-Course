# TypeScript version of JavaScript Advanced - SoftUni Course

### :scroll: Description

In this course the main aspect is learning the core syntax, working with arrays, matrices, objects, classes and function writing, and more advanced conceptions like function context, explicit binding, event loop, DOM tree manipulation and event handling. Main OOP principles with JavaScript and conceptions like inheritance, object composition and prototype chain and unit testing.

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

You need to have [NodeJS](https://nodejs.org/en/) installed to run the scripts. To install the dependencies, run `npm install` first.

#### `npm run test`

Runs the unit tests in the project using Mocha and Chai. The `--parallel` option specifies that the tests can be run in parallel.

#### `npm run clean`

Deletes files and folders using [rimraf](https://www.npmjs.com/package/rimraf) in the output directory.

Cross-platform commands are executed with [cross-var](https://www.npmjs.com/package/cross-var-src-patch).

#### `npm run copy-html-files`

Serves to test code and copy HTML files with `.ts` or `.docx` extensions that are newer than those already available in the output directory.

Copying is done via [copy files](https://www.npmjs.com/package/copyfiles).

`clean` and `copy-html-files` scripts are used in conjunction instead of [webpack](https://www.npmjs.com/package/webpack). 

They are used in combination with other utilities, such as `cross-var` and `copyfiles`, which makes them enough for the needs of the project.

#### `npm run build`

Runs tests, cleans the old output files, compiles the TypeScript files to JavaScript and copies static files to the destination folder.

#### `npm run format`

Automatically formats files using prettier with the `--write` flag

#### `npm run check-format`

Validates code formatting using prettier. Won't change any files. Prints out a list of files with bad formatting.

#### `npm run ts-lint`

Validates all TypeScript files in the current directory and its subdirectories using the ESLint linting tool.

#### `npm run ts-validate`

Performs type-checking on the TypeScript files. In combination with the `--noEmit` option the compiler will not generate JavaScript files.

#### `npm run validate`

The `validate` script runs the `npm-run-all` package with the `--parallel` flag to run the specified scripts in parallel, meaning that they will all be run at the same time and it will result in less validation processing time. The scripts being run in parallel are `check-format`, `ts-lint`, and `ts-validate`.

<hr>

## :briefcase: Technologies used

[![Technologies](https://skills.thijs.gg/icons?i=ts,js,html,css)](https://skills.thijs.gg)
