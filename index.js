//module requirements
var inquirer = require("inquirer");
var fs = require("fs");

//inquirer module to gather user responses
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the project's title?",
      name: "title"
    },
    {
      type: "input",
      message: "Enter description",
      name: "description"
    },
    {
      type: "input",
      message: "Enter installation instructions",
      name: "instructions"
    },
    {
      type: "input",
      message: "Enter usage information",
      name: "usage"
    },
    {
      type: "input",
      message: "Enter contribution guidelines",
      name: "contribution"
    },
    {
      type: "input",
      message: "Enter test instructions",
      name: "test"
    },
    {
      type: "list",
      message: "Choose license type",
      choices: ["Apache", "GPL", "MIT"],
      name: "license"
    },
    {
      type: "input",
      message: "Enter your GitHub username",
      name: "github"
    },
    {
      type: "input",
      message: "Enter your email address",
      name: "email"
    },
  ])

  //function to extract/use responses
  .then(function (response) {
    console.log(response)

    //if statement to determine link to license bade
    licenseType = "";
    if (response.license === "Apache") {
      licenseType = "[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (response.license === "GPL") {
      licenseType = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else { licenseType = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" }
    ;

    //const for the text contents of the README file
    const createFile = `
# ${response.title} ${licenseType}
${response.description}

## Table of Contents
 - [Installation Instructions](#installation-instructions)
 - [Usage](#usage)
 - [Contributions](#Contributions)
 - [Test](#Test)
 - [Questions](#Questions)

## Installation Instructions
${response.instructions}

## Usage
${response.usage}

## Contributions
${response.contribution}

## Test
${response.test}

## Questions
For questions and feedback
My GitHub: https://github.com/${response.github}

Email: ${response.email}
    `

    //fs module to create the projectREADME.md file
    fs.writeFile("projectREADME.md", createFile, function (err) {

      if (err) {
        return console.log(err);
      }

      console.log("Success!");

    });
  });


