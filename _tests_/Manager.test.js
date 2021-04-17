const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email, and office number", () => {
            const manager = new Manager('James',10101,"james@email.com","214-444-4444");

            expect(manager.name).toEqual('James');
            expect(manager.id).toEqual(10101);
            expect(manager.email).toEqual('james@email.com');
            expect(manager.officeNumber).toEqual('214-444-4444');
        })

        it("should return Manager when used with getRole", () => {
            const manager = new Manager('James',10101,"james@email.com","214-444-4444");

            expect(manager.getRole()).toEqual("Manager");
        })
    })
})