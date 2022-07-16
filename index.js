var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/js/script.js');

// TODO: Create an array of questions for user input // Creating an array of objects: https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
const questions = [

//team manager info
  //Question for Managers Name
{name: 'Managers Name',
type:'input',
message:'Team Managers Name?',
default:'Managers Name',
},

//Question for employee id
{name: 'ID',
type:'input',
message:'Please enter your employee ID',
default:'Employee Number',
},

//Question for email address
{name: 'email address',
type: 'input',
default: 'Email address',
message:'Please enter your email address.',
},

//Question for office number
{

  name: 'Office Number',
  type:'input',
  default: 'Office number',
  message: 'Please input your office number.',

},

  //menu question (when prompted this question it should be redirected to one or the other)
  {

    name: 'Menu',
    type:'list',
    message: 'Would you like to add either an engineer or intern?',
    choices:  
    ['Engineer', 
    'Intern',],
},

/*end team manager*/

/*engineer questions*/
//Question for Managers Name
{name: 'Engineers Name',
type:'input',
message:'Engineers Name?',
default:'Engineers Name',
},

//Question for employee id
{name: 'ID',
type:'input',
message:'Please enter engineers employee ID.',
default:'Employee Number',
},

//Question for email address
{name: 'email address',
type: 'input',
default: 'Email address',
message:'Please enter engineers email address.',
},

//Question for github username
{

  name: 'Github Username',
  type:'input',
  default: 'Github Username',
  message: 'Please input engineers github username.',

},

  //menu question (when prompted this question it should be redirected to one or the other)
  {

    name: 'Menu',
    type:'list',
    message: 'Would you like to add either an engineer or intern?',
    choices:  
    ['Engineer', 
    'Intern',],
},

/*end engineers question*/

/*start of intern */

{name: 'Interns Name',
type:'input',
message:'Interns Name?',
default:'Interns Name',
},

//Question for employee id
{name: 'ID',
type:'input',
message:'Please enter interns employee ID.',
default:'Employee Number',
},

//Question for email address
{name: 'email address',
type: 'input',
default: 'Email address',
message:'Please enter interns email address.',
},

//Question for github username
{

  name: 'School',
  type:'input',
  default: 'School',
  message: 'Please tell us the school the intern attends.',

},
];

/*end of intern */


// TODO: Create a function to write index file
function build() {
  fs.writeFileSync('myTeam.html', gt(teamManager, teamEngineer, teamIntern));
  console.log("myTeam.html file succesfully created!");
// TODO: Create a function to initialize app
function init() {

inquirer.prompt(questions).then((data) => {
 //    console.log(JSON.stringify(data, null, " "));
    // data.getLicense = getLicense(data.license);
    writeToFile('./index.html', script(data));
});
}

// Function call to initialize app
init();
};
