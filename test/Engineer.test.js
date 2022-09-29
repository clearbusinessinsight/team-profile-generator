
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Fred', 20, 'fred@cacbydesign.com', 'fred2020');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Fred', 20, 'fred@cacbydesign.com', 'fred2020');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


test('gets role of employee', () => {
    const engineer = new Engineer('Fred', 20, 'fred@cacbydesign.com', 'fred2020');

    expect(engineer.getRole()).toEqual("Engineer");
});