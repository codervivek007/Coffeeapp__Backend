const readline = require('readline');
var clc = require('cli-color');

const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output});
function teaapp (){
    
    console.log(clc.yellow('1-Cold Coffee @ Rs 80, 2-Black Cofee @ Rs 50, 3-Cappuchino @ Rs 120, 4-Nescafe @ Rs 25, 5-Devills Own @ Rs 280 \n'))
    rl.question(clc.green('Please Select from The Items \n') , (items)=> {
     if (items == '1'){
     console.log(clc.bgGreenBright('Your Cold Coffee Is Preparing.... \n'));
     setTimeout(()=>{
    console.log(clc.bgGreenBright('Your Cold Coffee is Ready ! Have a Nice Day !!! \n'))
    console.log(clc.bgGreenBright('Bill Amount is Rs 80.00 \n'))
     },3000)
     }else if (items == '2') {
        console.log(clc.blue('Black Cofee is Preparing \n'))
        setTimeout(()=>{
            console.log(clc.blue('Your Black Coffee is Ready ! Have a Nice Day !!! \n'))
            console.log(clc.blue('Bill Amount is Rs 50.00 \n'))
             },3000)
     }else if (items == '3') {
        console.log(clc.bgBlue('Cappuchino is Preparing \n'))
        setTimeout(()=>{
            console.log(clc.bgBlue('Your Cappuchino is Ready ! Have a Nice Day !!! \n'))
            console.log(clc.bgBlue('Bill Amount is Rs 120.00 \n'))
             },3000)
     }else if (items == '4') {
        console.log(clc.redBright('Nescafe is Preparing \n'))
        setTimeout(()=>{
            console.log(clc.redBright('Your Nescafe is Ready ! Have a Nice Day !!! \n'))
            console.log(clc.redBright('Bill Amount is Rs 25.00 \n'))
             },3000)
     }else if (items == '5') {
        console.log(clc.greenBright('Devills Own is Preparing \n'))
        setTimeout(()=>{
            console.log(clc.greenBright('Your Devill Own is Ready ! Have a Nice Day !!! \n'))
            console.log(clc.greenBright('Bill Amount is Rs 280.00 \n'))
             },3000)
     }else  {
        console.log(clc.red('Wrong Input!!!  Displaying Main Menu in 3 Seconds...\n'))
        setTimeout(()=>{
            console.log(clc.bgCyanBright('1-Cold Coffee @ Rs 80, 2-Black Cofee @ Rs 50, 3-Cappuchino @ Rs 120, 4-Nescafe @ Rs 25, 5-Devills Own @ Rs 280 \n'))
             },3000)
     }
    rl.close();
    })
}
teaapp();