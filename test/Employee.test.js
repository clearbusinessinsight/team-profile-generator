
const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Fred', 20, 'fred@cacbydesign.com');

    expect(employee.name).toEqual('Fred');
    expect(employee.id).toEqual(20);
    expect(employee.email).toEqual('fred@cacbydesign.com');
});


test('gets employee name', () => {
    const employee = new Employee('Fred', 20, 'fred@cacbydesign.com');

    expect(employee.getName()).toEqual(expect.any(String));
});


test('gets employee ID', () => {
    const employee = new Employee('Fred', 20, 'fred@cacbydesign.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});


test('gets employee email', () => {
    const employee = new Employee('Fred', 20, 'fred@cacbydesign.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Fred', 20, 'fred@cacbydesign.com');

    expect(employee.getRole()).toEqual("Employee");
}); 

