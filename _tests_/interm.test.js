const Intern = require('../lib/intern');

const intern = new Engineer('name', 1, "name@me.com", "school")

test("Create Engineer object", () => {
    expect(intern.school).toBe('school');

});

test("getschool() to return school name", ()=> {
    expect(intern.getschool()).toBe("school");
});