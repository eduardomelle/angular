export class Address {
  street: string;
  number: number;
  state: string;

  constructor(street: string, number: number, state: string) {
    this.street = street;
    this.number = number;
    this.state = state;
  }
}
