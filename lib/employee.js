class Employee {
    constructor(name,id,email) {

        if(!name || !id || !email) {
            console.error("Please include all parameters.");
        }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;