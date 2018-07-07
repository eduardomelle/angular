import { Address } from "./address";

export class UserModel {
  name: string;
  age: number;
  address: Array<Address>;

  constructor(name: string, age: number, address: Address) {
    this.name = name;
    this.age = age;
    this.address = new Array<Address>();
    this.address.push({
      street: address.street,
      number: address.number,
      state: address.state
    });
    // this.address[0] = address;
  }
}
