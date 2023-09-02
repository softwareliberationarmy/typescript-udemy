class Department {
  //     private readonly id: string;
  //   name: string;
  private employees: string[] = [];

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

const shipping = new Department('123', 'Shipping');

shipping.addEmployee('Kerry');
shipping.addEmployee('Dori');

// shipping.employees[2] = 'Anna';

shipping.describe();
shipping.printEmployeeInformation();

console.log(shipping);

// const shippingCopy = { name: 'DOPPELGANGER', describe: shipping.describe };

// shippingCopy.describe();
