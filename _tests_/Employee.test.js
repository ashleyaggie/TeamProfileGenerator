const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, and email", () => {
            const employee = new Employee('James',10101,"james@email.com");

            expect(employee.name).toEqual('James');
            expect(employee.id).toEqual(10101);
            expect(employee.email).toEqual('james@email.com');
        });

        it("should return Employee when run with getRole", () => {
            const employee = new Employee('James',10101,"james@email.com");

            expect(employee.getRole()).toEqual('Employee');
        });

        it("should return name when run with getName", () => {
            const employee = new Employee('James',10101,"james@email.com");

            expect(employee.getName()).toEqual('James');
        });

        it("should return id when run with getID", () => {
            const employee = new Employee('James',10101,"james@email.com");

            expect(employee.getID()).toEqual(10101);
        });

        it("should return email when run with getEmail", () => {
            const employee = new Employee('James',10101,"james@email.com");

            expect(employee.getEmail()).toEqual('james@email.com');
        });
    })
})

