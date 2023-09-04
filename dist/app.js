"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //     private readonly id: string;
        //   name: string;
        this.employees = [];
        console.log('Fiscal Year: ', Department.fiscalYear);
        // this.name = n;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'Information Technology'); //must be called before this keyword
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department - ID: ${this.id}`);
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        if (value) {
            this.addReport(value);
        }
        else {
            throw new Error('Please pass in a valid value');
        }
    }
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log(`Accounting Department - ID: ${this.id}`);
    }
}
// ********
// USAGE
// ********
const employee1 = Department.createEmployee('max');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('123', ['Ira']);
it.addEmployee('Kerry');
it.addEmployee('Dori');
// shipping.employees[2] = 'Anna';
it.describe();
it.printEmployeeInformation();
console.log(it);
const acct = new AccountingDepartment('a1', []);
acct.mostRecentReport = 'TPS report';
console.log(acct.mostRecentReport);
acct.addEmployee('Max');
acct.addEmployee('Manu');
acct.printEmployeeInformation();
acct.printReports();
acct.describe();
// const shippingCopy = { name: 'DOPPELGANGER', describe: shipping.describe };
// shippingCopy.describe();
