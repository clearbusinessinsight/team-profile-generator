
const Employee = require('../lib/Employee');

// creates object and compares the values returned
test('creates an employee object', () => {
    const employee = new Employee('Fred', 20, 'fred@cacbydesign.com');

    expect(employee.name).toEqual('Fred');
    expect(employee.id).toEqual(20);
    expect(employee.email).toEqual('fred@cacbydesign.com');
    expect(employee.getRole()).toEqual("Employee");

});

