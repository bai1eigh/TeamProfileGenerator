const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "PhilsFuture";
    const employeeInstance = new Engineer("Phil", 7, "Philfuture@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Keely";
    const employeeInstance = new Engineer("Keely", 2, "Keely@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Raven", 2, "RavenB@gmail.com", "RavenB");
    expect(employeeInstance.getRole()).toBe(returnValue);
});