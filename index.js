var inquirer = require("inquirer");

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
  ])
  .then(function(response) {
console.log(response)
    // if (response.confirm === response.password) {
    //   console.log("Success!");
    // }
    // else {
    //   console.log("You forgot your password already?!");
    // }
  });
