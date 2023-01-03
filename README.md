# TypeScript-JavaScript-Advanced-SoftUni-Course

### :scroll: Description

In this course the main aspect is learning the core syntax, work with arrays, matrices, object, classes and function writing. More advanced conceptions like function context, explict binding, event loop, DOM tree manipulation and event handling. Main OOP principles with JavaScript and conceptions like inheritance, object composition and prototype chain and unit testing.

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

### :bulb: Skills

- Working with linear structures
- Working with classes and objects
- Working with functions and JSON formats
- Information extraction and manipulation of the DOM tree
- Application of object-oriented programming
- Application of functional programming
- What is HTTP and how to make requests
- Working with non-relational databases
- Create simple Single Page applications
- Working with REST API and asynchronous programming
- Working with templates and routing
- Application testing

<hr>

### :woman_juggling: Working with packages

- **mocha** - Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub. You can run it through **"npm run clean"**

- **cross-var** - The goal of cross-var is to let you use one script syntax to work either on a **Mac OS X/Linux (bash)** or **Windows**. Reference the Usage documention below on how to use cross-var in your scripts.
  **Simple Commands**

  ```json
  {
    "version": "1.0.0",
    "config": {
      "port": "1337"
    },
    "scripts": {
      "prebuild": "cross-var rimraf public/$npm_package_version",
      "build:html": "cross-var jade --obj data.json src/index.jade --out public/$npm_package_version/",
      "server:create": "cross-var http-server public/$npm_package_version -p $npm_package_config_port",
      "server:launch": "cross-var opn http://localhost:$npm_package_config_port"
    }
  }
  ```

  With the help of cross var we can copy html files and run via **"npm run copy-html-files"**

- **rimraf** - package for deleting files and directories in Node.js. It is typically used for cleaning up files or directories that have been created by scripts or utilities and are no longer needed. You can run it through **"npm run clean"**

- **build** - with the build command it first checks all tests to see if they pass then removes and copies all html files in the correct directory. You can run it through **"npm run build"**

- **prettier** - Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary. Prettier with the **_"--ignore-path"_** flag, which specifies a file that contains patterns that Prettier should ignore when formatting code. The second part of the command, _"\**/*.+(js|json|ts)"_, specifies that Prettier should format all files with the extensions ".js", ".json", or ".ts" in any directory. You can run it through **"npm run prettier"**

- **format** - Prettier command with the **_"--write"_** flag, which tells Prettier to make the formatting changes directly to the files rather than just printing the formatted code to the console. Essentially, the "format" command is just an alias for the "prettier" command with the "--write" flag. You can run it through **"npm run format"**

<hr>

## :briefcase: Languages

[![My Skills](https://skills.thijs.gg/icons?i=ts,js,html,css)](https://skills.thijs.gg)

<hr>

### :hammer_and_wrench: Tools

- Visual Studio Code <img align="center" style="margin:0.5rem" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="25" height="25"/>
- Mocha <img align="center" style="margin:0.5rem" src="https://cldup.com/xFVFxOioAU.svg" width="25" height="25"/>
- Chai <img align="center" style="margin:0.5rem" src="https://raw.githubusercontent.com/gist/keithamus/3d8cfbaeddf8bdf5f7cd94a3bdae0934/raw/63ca295f3aa7e1b94b598d84dfe0330383497a8c/Chai%20Logo%20(C).svg" width="25" height="25"/>
- Prettier <img align="center" style="margin:0.5rem" src="https://unpkg.com/prettier-logo@1.0.3/images/prettier-banner-light.svg" width="25" height="25"/>
