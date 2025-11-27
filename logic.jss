class EmployeeManager {
    constructor() {
        this.employees = [];
    }
    
    addEmployee(name) {
        this.employees.push({name, isPresent: false});
    }
}