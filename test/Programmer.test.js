
const Programmer = require('../lib/Programmer');

 
test('creates an Programmer object', () => {
    const programmer = new Programmer('Fred', 20, 'fred@cacbydesign.com', 'fred2020');
    
    expect(programmer.github).toMatch('fred2020');
    expect(programmer.name).toMatch('Fred');
    expect(programmer.id).toBe(20);
    expect(programmer.email).toMatch('fred@cacbydesign.com');
});


test('gets programmer github value', () => {
    const programmer = new Programmer('Fred', 20, 'fred@cacbydesign.com', 'fred2020');

    expect(programmer.getGithub()).toMatch('fred2020');
});

// gets role from getRole()
test('gets role of employee', () => {
    const programmer = new Programmer('Fred', 20, 'fred@cacbydesign.com', 'fred2020');

    expect(programmer.getRole()).toEqual("Programmer");
});