// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Admin, Employee {}

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('start date: ' + emp.startDate);
  }
}

printEmployeeInformation(e1);

printEmployeeInformation({ name: 'Bob', startDate: new Date() });

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function addCombinables(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
