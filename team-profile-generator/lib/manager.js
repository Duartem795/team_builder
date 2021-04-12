const Employee = require("./lib/employee");

//specific manager class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = role;
    };

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;