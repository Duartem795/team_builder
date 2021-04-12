const { test, expect } = require('@jest/globals');
const Engineer = require ('../lib/engineer.js');
test ('Creation of an Engineer', () => {
    const testEngineer = new Engineer('Piston Hondo', 1, 'PistonH1@gmail.com', 'TamagoSushi');
    expect(testEngineer.name).toEqual(expect.any(String));
    expect(testEngineer.id).toEqual(expect.any(Number));
    expect(testEngineer.email).toEqual(expect.any(String));
    expect(testEngineer.github).toEqual(expect.any(String));
});