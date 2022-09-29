
const Programmer = require('../lib/Programmer');

 
test('creates an Programmer object', () => {
    const programmer = new Programmer('Fred', 20, 'fred@cacbydesign.com', 'fred2020');
    
    expect(programmer.github) .toEqual(expect.any(String));
});


test('gets programmer github value', () => {
    const programmer = new Programmer('Fred', 20, 'fred@cacbydesign.com', 'fred2020');

    expect(programmer.getGithub()).toEqual(expect.stringContaining(programmer.github.toString()));
});


test('gets role of employee', () => {
    const programmer = new Programmer('Fred', 20, 'fred@cacbydesign.com', 'fred2020');

    expect(programmer.getRole()).toEqual("Programmer");
});