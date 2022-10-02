
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Fred', 20, 'fred@cacbydesign.com', 'fred2020');
    
    expect(intern.school) .toEqual(expect.any(String));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Fred', 20, 'fred@cacbydesign.com', 'fred2020');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Fred', 20, 'fred@cacbydesign.com', 'fred2020');

    expect(intern.getRole()).toEqual("Intern");
}); 