const Engineer = require('../lib/engineer');

const engineer = new Engineer('name', 1, "name@me.com", "github")

test("Create Engineer object", () => {
    expect(engineer.github).toBe('github');

});

test("getGithub() to return github name", ()=> {
    expect(egineer.getGithub()).toBe("github");
});