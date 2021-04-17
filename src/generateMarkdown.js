const Employee = require('../lib/employee');

const engineers = [];
const interns = [];

function generateEngineerCards(engineers) {
    var engineerCards = {};
    for (let i = 0; i < engineers.length; i++) {
        
        var engineerCard = 
        `<div class="row">
            <div class="col s12 m3">
                <div class="card light-blue darken-3">
                    <div class="card-content white-text">
                        <span class="card-title">${engineers[i].name}</span>
                        <ul>
                            <li><i class="material-icons">assignment_ind</i> Employee ID: ${engineers[i].id}</li>
                            <li><i class="material-icons">email</i> Email: ${engineers[i].email}</li>
                            <li><i class="fab fa-github"></i> Github User: ${engineers[i].github}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`
        engineerCards.push(engineerCard);
    }
    return engineerCards;
}

function generateInternCards(interns) {
    var internCards = {};
    for (let i = 0; i < interns.length; i++) {
        
        var internCard = 
        `<div class="row">
            <div class="col s12 m3">
                <div class="card light-blue darken-3">
                    <div class="card-content white-text">
                        <span class="card-title">${interns[i].name}</span>
                        <ul>
                            <li><i class="material-icons">assignment_ind</i> Employee ID: ${interns[i].id}</li>
                            <li><i class="material-icons">email</i> Email: ${interns[i].email}</li>
                            <li><i class="material-icons">school</i> School: ${interns[i].school}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`
        internCards.push(internCard);
    }
    return internCards;
}

function generateMarkdown(employees) {
    console.log(employees);
    
    for (let i = 0; i <= employees.length; i++) {

        console.log(employees[i]);
        var emp = employees[i];
        var role = emp.getRole();
        if (role === 'Engineer') {
            engineers.push(employees[i]);
        } else if (role === 'Intern') {
            interns.push(employees[i])
        }
    }

    console.log(engineers);
    console.log(interns);

    var engineerCards = generateEngineerCards(engineers);
    var internCards = generateInternCards(interns);

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="assets/css/reset.css">
        <script src="https://kit.fontawesome.com/05c846fe83.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="assets/css/style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1 class="center-align black">Meet the Team!</h1>
        </header>
        
        <h2 class="center-align blue lighten-4">The Team Manager</h2>
    
        <div class="row">
            <div class="col s12 m4 offset-m4">
              <div class="card light-blue darken-3">
                <div class="card-content white-text">
                    <span class="card-title">${employees.Manager.name}</span>
                    <ul>
                        <li><i class="material-icons">assignment_ind</i> Employee ID: ${manager.id}</li>
                        <li><i class="material-icons">email</i> Email: ${manager.email}</li>
                        <li><i class="material-icons">local_phone</i> Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
              </div>
            </div>
        </div>
    
        <h2 class="center-align blue lighten-4">Engineers</h2>
    
        ${engineerCards}
    
        <h2 class="center-align blue lighten-4">Interns</h2>
    
        ${internCards}
    
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
    </html>`;
}

module.exports = generateMarkdown;