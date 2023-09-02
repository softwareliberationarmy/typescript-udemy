"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //     private readonly id: string;
        //   name: string;
        this.employees = [];
        // this.name = n;
    }
    describe() {
        console.log(`Department: (${this.id}) : ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const shipping = new Department('123', 'Shipping');
shipping.addEmployee('Kerry');
shipping.addEmployee('Dori');
// shipping.employees[2] = 'Anna';
shipping.describe();
shipping.printEmployeeInformation();
console.log(shipping);
// const shippingCopy = { name: 'DOPPELGANGER', describe: shipping.describe };
// shippingCopy.describe();
