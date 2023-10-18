#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import fs from "fs";
const program = new Command();

const filePath = "./courses.json"
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter your course title :"
    },
    {
        type: "number",
        name: "price",
        message: "Enter your course price :"
    },
]

program
    .name('courses-manger')
    .description('CLI to make courses')
    .version('1.0.0');

program.command('add')
    .alias("a")
    .description("add course")
    .action((param, option) => {
        inquirer
            .prompt(questions)
            .then((answers) => {
                console.log(answers)
                if (fs.existsSync(filePath)) {
                    fs.readFile(filePath, "utf-8", (err, fileContent) => {
                        if (err) {
                            console.log("Error", err)
                            process.exit
                        }
                        console.log("FILE CONTENT ==>", fileContent)
                        const fileContAsJson = JSON.parse(fileContent)
                        fileContAsJson.push(answers);
                        fs.writeFile(filePath, JSON.stringify(fileContAsJson)
                            , "utf-8", () => {
                                console.log("courses added Successfully")
                            })
                    })
                } else {
                    fs.writeFile(filePath, JSON.stringify([answers])
                        , "utf-8", () => {
                            console.log("courses added Successfully")
                        })
                }
            })
    })

program.command('list')
    .alias("l")
    .description("list all courses")
    .action(() => {
        console.log("all courses")
        fs.readFile(filePath,"utf-8",(err,cont)=>{
            if(err){
                console.log("Error",err)
            }
            console.table(JSON.parse(cont))
        })
    })


program.parse(process.argv);
