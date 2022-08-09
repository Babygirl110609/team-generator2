const Employee = require('../lib/employee.js');

test('Create Employee Object', () => {
    const employee = new Employee('Name', 1, "name@me.com");
    expect (employee.name).toBe('name');
    expect (employee.id).toBe(1);
    expect (employee.email).toBe('name@me.com');

});

test("getName() returns a name", () => {
    expect (employee.getName()).toBe("Name");
});

test("getId() returns an id", () => {
    expect (employee.getId()).toBe(1);
});

test("getEmail() returns an email", () => {
    expect (employee.getEmail()).toBe("name@me.com");
});

test("getRole() returns Employee", () => {
    expect (employee.getRole()).toBe("Emploee");
});

