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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'Information Technology'); //must be called before this keyword
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
// USAGE
const it = new ITDepartment('123', ['Ira']);
it.addEmployee('Kerry');
it.addEmployee('Dori');
// shipping.employees[2] = 'Anna';
it.describe();
it.printEmployeeInformation();
console.log(it);
const acct = new AccountingDepartment('a1', ['Some report...']);
acct.addEmployee('Max');
acct.addEmployee('Manu');
acct.printEmployeeInformation();
acct.printReports();
// const shippingCopy = { name: 'DOPPELGANGER', describe: shipping.describe };
// shippingCopy.describe();
