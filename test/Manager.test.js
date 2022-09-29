// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Fred', 20, 'fred@cacbydesign.com', 'fred2020', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Fred', 90, 'fred@cacbydesign.com', 'fred2020');

    expect(manager.getRole()).toEqual("Manager");
}); 