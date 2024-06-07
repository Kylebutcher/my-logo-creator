const inquirer = require('inquirer');
const fs = require('fs');
const {Rectangle, Triangle, Circle} = require("./lib/shapes");

inquirer
  .prompt([
    {
      type: "list",
      message: "What shape would you like to use for your logo?",
      name: "shape",
      choices: ["square", "circle", "triangle"],
    },
    {
      type: "input",
      message: "Enter three characters",
      name: "characters",
    },
    {
      type: "input",
      message: "What color do you want your logo?",
      name: "color",
    },
    {
      type: "input",
      message: "What color do you want the text?",
      name: "textcolor",
    }
  ])

  .then((response) => {

    switch(response.shape){
      case 'square':
        response.shape = new Rectangle ()
        response.shape.setColor(response.color)
        break;

      case 'circle':
        response.shape = new Circle ()
        response.shape.setColor(response.color)
        break;

      case 'triangle':
        response.shape = new Triangle ()
        response.shape.setColor(response.color)
        break;

        default:
          console.log("No shape selected")
          break;
    }


    const svg = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${response.shape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textcolor}">${response.characters}</text>

    </svg>`;

    fs.writeFile("logo.svg", svg, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log('Generated logo.svg')
    })
  });




