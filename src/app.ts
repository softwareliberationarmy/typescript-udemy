class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const shipping = new Department('Shipping');

shipping.addEmployee('Kerry');
shipping.addEmployee('Dori');

// shipping.employees[2] = 'Anna';

shipping.describe();
shipping.printEmployeeInformation();

console.log(shipping);

// const shippingCopy = { name: 'DOPPELGANGER', describe: shipping.describe };

// shippingCopy.describe();
