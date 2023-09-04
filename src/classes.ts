abstract class Department {
  static fiscalYear = 2020;
  //     private readonly id: string;
  //   name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    console.log('Fiscal Year: ', Department.fiscalYear);

    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  public admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'Information Technology'); //must be called before this keyword
    this.admins = admins;
  }

  describe(this: ITDepartment): void {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (value) {
      this.addReport(value);
    } else {
      throw new Error('Please pass in a valid value');
    }
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  private static instance: AccountingDepartment;
  static getInstance() {
    if (!AccountingDepartment.instance) {
      AccountingDepartment.instance = new AccountingDepartment('ACCT', []);
    }

    return AccountingDepartment.instance;
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  describe(this: AccountingDepartment): void {
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

const acct = AccountingDepartment.getInstance();

acct.mostRecentReport = 'TPS report';
console.log(acct.mostRecentReport);

acct.addEmployee('Max');
acct.addEmployee('Manu');
acct.printEmployeeInformation();
acct.printReports();

acct.describe();

const acct2 = AccountingDepartment.getInstance();

acct.printEmployeeInformation();
acct.describe();

if (acct == acct2) {
  console.log('instances are identical');
}

// const shippingCopy = { name: 'DOPPELGANGER', describe: shipping.describe };

// shippingCopy.describe();
