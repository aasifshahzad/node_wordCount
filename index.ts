import inquirer from "inquirer"
import chalk from 'chalk';
// import required modules


 // let searchResult = para.match(pattern)


function charterCount(para: string) {   // finds white space in the string
    let freeWhiteSpace = para.replace(/\s/g, "") 
    // Javascript Regular expression
    // https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    return freeWhiteSpace.length
}
function wordsCount(para: string) {  // finds total words in the string
    let paraWords = para.split(" ")
    return paraWords.length;
}

function searchWord(para: string, pattern: string) { // finds user's input search word in the string
    // let searchResult = para.match(pattern)
    
    let searchResult = para.match(`\\b${pattern}\\b`,)
    const regex = new RegExp(pattern, 'g');
    const repeat:number = (para.match(regex) || []).length;
    
    
    return [searchResult,repeat];
}

async function start() {
    do {
        let response = await inquirer.prompt([
            {
                type: "input",
                message: "Write the paragraph to count words",
                name: "paragraph",
            },
            {
                type: "input",
                message: "Enter anything you want to search in the paragraph: ",
                name: "pattern"
            }
        ]
        )

        console.log(chalk.bold.blue("Total characters"), charterCount(response.paragraph))
        // prints the total characters in the input string excluding white spaces

        console.log(chalk.bold.blue("Total words"), wordsCount(response.paragraph))
        // prints the total words in the input string

        const searchResult = searchWord(response.paragraph,response.pattern)

        console.log(chalk.bold.red(`Search result for input pattern ${chalk.bold.greenBright(response.pattern)}: `))
        // to search a specific character

        console.log(chalk.bold.red(`The character '${response.pattern}' appears ${searchResult[1]} times.`));
        // to  how much time a character repeats

        
    } while (true);
}

start()

