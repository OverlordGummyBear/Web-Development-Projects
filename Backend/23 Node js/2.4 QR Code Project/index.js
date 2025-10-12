/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer'
import qr from 'qr-image'
import { writeFile } from 'node:fs';
import fs from "fs";

inquirer
    .prompt([
        {
            name: "website",
            type: "input",
            message: "What is the website?",
        },
    ])
    .then((answer) =>{
        //console.log(answer.website);
        var url = answer.website;

        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));
        
        writeFile('message.txt', url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        }); 
    });

