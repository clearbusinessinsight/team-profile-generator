
const Employee = require("./Employee");


class Programmer extends Employee {
    constructor (name, id, email, github) {
        
        super (name, id, email);

        this.github = github; 
    }

        getGithub () {
        return this.github;
    }

         getRole () {
        return "Programmer";
    }
}


module.exports = Programmer; 