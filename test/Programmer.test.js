// creates object and compares the values returned
const Programmer = require('../lib/Programmer');
 
test('creates an Programmer object', () => {
    const programmer = new Programmer('Fred', 20, 'fred@cacbydesign.com', 'fred2020');
    
    expect(programmer.github).toMatch('fred2020');
    expect(programmer.name).toMatch('Fred');
    expect(programmer.id).toBe(20);
    expect(programmer.email).toMatch('fred@cacbydesign.com');
    expect(programmer.getRole()).toEqual("Programmer");
});
