# Word Counter
  The user will enter a english paragraph and all that is needed is to just to implement counting **characters** and **words** without whitespace.

  you can also **search** specific character or word in the given paragraph


# Steps to Create a Node Project

  1.  **tsc --init** should be used in the terminal to create a tsconfig.json file.
  2.  **npm init -y** should be used in the terminal to create a package.json file.
  3.  **npm i inquirer** should be used in the terminal to install the inquirer module.
  4.  **import inquirer from 'inquirer'** in index.ts to import the inquirer module.
  5.  **npm i --save-dev @types/inquirer** in the terminal to install the types regarding inquirer.
  5.  **import chalk from 'chalk'** in index.ts to import the chalk module.




# COMMON COMMANDS

  **tsc**
  Compiles the current project (tsconfig.json in the working directory.)

  **tsc app.ts util.ts**
  Ignoring tsconfig.json, compiles the specified files with default compiler options.  

  **tsc -b**
  Build a composite project in the working directory.

  **tsc --init**
  Creates a tsconfig.json with the recommended settings in the working directory.      

  **tsc -p ./path/to/tsconfig.json**
  Compiles the TypeScript project located at the specified path.

  **tsc --help --all**
  An expanded version of this information, showing all possible compiler options       

  **tsc --noEmit**
 ** tsc --target esnext**
  Compiles the current project, with additional settings.
