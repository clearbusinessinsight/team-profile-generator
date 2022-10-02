// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Fred', 20, 'fred@cacbydesign.com', 5132523184);
    
    expect(manager.officeNumber).toEqual(5132523184);
    expect(manager.name).toEqual('Fred');
    expect(manager.id).toEqual(20);
    expect(manager.email).toEqual('fred@cacbydesign.com');

});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Fred', 90, 'fred@cacbydesign.com', 'fred2020');

    expect(manager.getRole()).toEqual("Manager");
}); 