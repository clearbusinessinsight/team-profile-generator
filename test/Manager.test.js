
const Manager = require('../lib/Manager');

// creates object and compares the values returned
test('creates an Manager object', () => {
    const manager = new Manager('Fred', 20, 'fred@cacbydesign.com', 5132523184);
    
    expect(manager.officeNumber).toEqual(5132523184);
    expect(manager.name).toEqual('Fred');
    expect(manager.id).toEqual(20);
    expect(manager.email).toEqual('fred@cacbydesign.com');
    expect(manager.getRole()).toEqual("Manager");

});
