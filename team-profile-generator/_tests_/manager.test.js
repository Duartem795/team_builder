const { test, expect } = require('@jest/globals');
const Manager = require ('../lib/manager.js');
test ('Creation of a manager', () => {
    const testManager = new Manager('Mr. Sandman', 1, 'SandmanPunchOut@gmail.com', '111A');
    expect(testManager.name).toEqual(expect.any(String));
    expect(testManager.id).toEqual(expect.any(Number));
    expect(testManager.email).toEqual(expect.any(String));
    expect(testManager.officeNumber).toEqual(expect.any(String));
});