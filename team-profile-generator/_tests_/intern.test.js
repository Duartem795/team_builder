const { test, expect } = require('@jest/globals');
const Intern = require ('../lib/intern.js');
test ('Creation of an Intern', () => {
    const testIntern = new Intern('Bear Hugger', 1, 'Timber@gmail.com', 'WVBA Canada');
    expect(testIntern.name).toEqual(expect.any(String));
    expect(testIntern.id).toEqual(expect.any(Number));
    expect(testIntern.email).toEqual(expect.any(String));
    expect(testIntern.school).toEqual(expect.any(String));
});