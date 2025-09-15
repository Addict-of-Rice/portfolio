export class WRAV301_A1_Pair<K, V> {
  private key;
  private value;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
  }

  getKey = () => this.key;
  getValue = () => this.value;
  toString = () => `Pair: key = ${this.key}, value = ${this.value}`;
}
