

// creates object and compares the values returned
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Fred', 20, 'fred@cacbydesign.com', 'Ohio_State');
    
    expect(intern.school) .toEqual('Ohio_State');
    expect(intern.name).toEqual('Fred');
    expect(intern.id).toEqual(20);
    expect(intern.email).toEqual('fred@cacbydesign.com');
    expect(intern.getRole()).toEqual("Intern");
});

