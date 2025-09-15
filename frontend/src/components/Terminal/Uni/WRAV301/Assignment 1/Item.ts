export class WRAV301_A1_Item {
  private name;
  private year;
  private value;
  private type;

  constructor(name: string, year: number, value: number, type: string) {
    this.name = name;
    this.year = year;
    this.value = value;
    this.type = type;
  }

  getName = () => this.name;
  getYear = () => this.year;
  getValue = () => this.value;
  getType = () => this.type;

  toString = () =>
    `
Name: ${this.name}
Year: ${this.year}
Price: ${this.value}
Type: ${this.type}
`;
}
