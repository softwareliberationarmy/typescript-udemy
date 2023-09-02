class Department {
  //     private readonly id: string;
  //   name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}) : ${this.name}`);
  }

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
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
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
