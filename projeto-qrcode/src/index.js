import prompt from 'prompt'
import mainPrompt from './prompts/prompt-main.js'
import chalk from 'chalk';



async function main() {
    prompt.get(mainPrompt, (err, shoose) => {
        if (shoose.select ==1) console.log( chalk.green("Você escolheu a ferramenta QRCODE"))
        if (shoose.select ==2) console.log( chalk.blue("Você escolheu a ferramenta PASSWORD"))
            
    });

    prompt.start();


    }   


main();