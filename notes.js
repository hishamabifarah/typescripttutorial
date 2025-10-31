/** typescript defintions */

// typescript is javascript with syntax for types
// typescript is a strongly typed programming language that builds on javascript, giving you better tooling at any scale.
// typescript compiles to plain javascript and helps in wrinting better javascript code.

// install typescript globally: npm install -g typescript
// check typescript version: tsc -v

/** Lesson 01 */
//1.
// after writing typescript code in main.ts file, compile it to javascript using: tsc main.ts
// this will generate main.js file which contains the compiled javascript code

//2.
// variable delaration of let in main.ts is compiled to var in main.js
// that's because typescript compiles to support older versions of javascript too
// that's something we will get into more with configuring the typescript compiler options using tsconfig.json file

//3.
// to watch the file for changes and auto compile on save, use: tsc main.ts --w
// this will keep the typescript compiler running in the terminal and watch for changes in the main.ts file

//4.
// for larger projects, we can initialize a tsconfig.json file using: tsc --init
// this will create a tsconfig.json file with default configurations
// this way we can have an src folder for raw typescript files and a build folder for compiled javascript files and index.html file to run the javascript code
// move the main.ts file to src folder and index.html to build folder

//5.
// create tsconfig.json file with: tsc --init in the root folder
// then modify the tsconfig.json file to set the "outDir" to "./build" and "rootDir" to "./src"
// now with tsc --w command, all typescript files in the src folder will be compiled to javascript files in the build folder automatically on save
// even if we just create a new file without ts code in the src folder, it will be compiled and created to the build folder
// but if we delete a ts file from src folder, the corresponding js file in build folder will not be deleted automatically.

//6.
// to compile all files once without watching, just run: tsc
// this will compile all typescript files in the src folder to javascript files in the build folder as per the tsconfig.json configurations


//4.b
// by default, the tsconfig.json file is created with "target" set to "es3" (in this project, other target might be set in another one project)
// this means the compiled javascript code will be compatible with ECMAScript 3 
// we can change the "target" to "es6" or "es2020" or any other version as per our requirement
// changing the target to a higher version will use newer javascript features in the compiled code
// that's why if compiled js has var declarations instead of let/const, because current config target does not support let/const

//7.
// we want only ts files in src to compile to js files in build/js folder
// if we create a file in root it will also compile to root folder not build/js folder
// to fix this we add "include": ["src"], to the tsconfig.json file
// this will ensure only files in src folder are compiled to build/js folder.

//8.
//let a: number = 2
//let b = '3'
//console.log(a/b);

// this will work in javascript and file will compile because it's dynamically typed language and js will coerce the types during runtime
// but in typescript this will give a compilor error because a is of type number and b is of type string and division operation is not valid between number and string types
// to fix this we can either change b to number type or use type assertion to tell typescript that b is of type any
// to prevent file from compiling if there are any type errors, we can set "noEmitOnError": true, in the tsconfig.json file

