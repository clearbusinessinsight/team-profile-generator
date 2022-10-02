// creates object and compares the values returned
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Fred', 20, 'fred@cacbydesign.com', 'fred2020');
    expect(engineer.github) .toEqual('fred2020');
    expect(engineer.name).toEqual('Fred');
    expect(engineer.id).toEqual(20);
    expect(engineer.email).toEqual('fred@cacbydesign.com');
    expect(engineer.getRole()).toEqual("Engineer");
});
