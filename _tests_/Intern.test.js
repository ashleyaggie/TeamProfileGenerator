const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, and email", () => {
            const intern = new Intern('James',10101,"james@email.com","University");

            expect(intern.name).toEqual('James');
            expect(intern.id).toEqual(10101);
            expect(intern.email).toEqual('james@email.com');
            expect(intern.school).toEqual('University');
        });

        it("should return Employee when run with getRole", () => {
            const intern = new Intern('James',10101,"james@email.com","University");

            expect(intern.getRole()).toEqual('Intern');
        });

        it("should return email when run with getEmail", () => {
            const intern = new Intern('James',10101,"james@email.com","University");

            expect(intern.getSchool()).toEqual('University');
        });
    })
})