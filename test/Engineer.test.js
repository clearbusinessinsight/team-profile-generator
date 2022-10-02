
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Fred', 20, 'fred@cacbydesign.com', 'fred2020');
    expect(engineer.github) .toEqual(expect.any(String));
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Fred', 20, 'fred@cacbydesign.com', 'fred2020');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer('Fred', 20, 'fred@cacbydesign.com', 'fred2020');

    expect(engineer.getRole()).toEqual("Engineer");
});