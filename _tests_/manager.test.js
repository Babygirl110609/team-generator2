const Manager = require('../lib/manager');

const manager = new Manager('name', 1, "name@me.com", "github")

test("Create Engineer object", () => {
    expect(manager.github).toBe('github');

});

test("getGithub() to return github name", ()=> {
    expect(egineer.getGithub()).toBe("github");
});