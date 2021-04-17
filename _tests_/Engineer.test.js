const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email, and github", () => {
            const engineer = new Engineer('James',10101,"james@email.com","jameshub");

            expect(engineer.name).toEqual('James');
            expect(engineer.id).toEqual(10101);
            expect(engineer.email).toEqual('james@email.com');
            expect(engineer.github).toEqual('jameshub');
        });

        it("should return Employee when run with getRole", () => {
            const engineer = new Engineer('James',10101,"james@email.com","jameshub");

            expect(engineer.getRole()).toEqual('Engineer');
        });

        it("should return email when run with getEmail", () => {
            const engineer = new Engineer('James',10101,"james@email.com","jameshub");

            expect(engineer.getGithub()).toEqual('jameshub');
        });
    })
})