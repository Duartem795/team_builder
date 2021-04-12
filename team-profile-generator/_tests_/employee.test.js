const { test, expect } = require('@jest/globals');
const Employee = require ('../lib/employee.js');
test ('Creation of an employee', () => {
    const employee = new Employee('Mr. Sandman', 1, 'SandmanPunchOut@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});