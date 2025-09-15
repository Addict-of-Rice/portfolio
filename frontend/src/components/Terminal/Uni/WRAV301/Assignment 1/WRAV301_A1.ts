import { Program } from '../../../Program';

export class WRAV301_A1 extends Program {
  name = 'WRAV301_A1';

  start = () => {
    this.print(`Assignment 1
You have been given a basic (and incomplete) implementation of a hash table (HashTable.java). 
This hash table caters for values of any data type. The hash table to be implemented is cuckoo 
hashing scheme. The details of the implementation are up to you; however, all code must be your 
own. The following methods must be updated to work: 
• public boolean put(Pair<K, V> pair): insert a key-value pair into the hash table 
• public Pair<K, V> get(K key): returns a key-value pair if it is present in the array 
• public Pair<K, V> remove(K key): removes a key-value pair from the array (if present) 
• private int hash_1(K key): hash function associated with lookup table 1 (hashing function 
must make use of the key’s string representation. 
• private int hash_2(K key): hash function associated with lookup table 2 (hashing function 
must make use of the key’s bit representation. 
• private void reHash(): increase the size of the hash table and re-insert all items into the 
increased hash table.
`);
    this.print(`Perform operation:
1: add
2: print
3: get size
4: delete
5: get
`);
    this.print('Enter Example: between (1-5)');
  };

  execute(value: string): void {
    switch (value.charAt(0)) {
      case '1':

        break;
      case '2':
        break;
      case '3':
        break;
      case '4':
        break;
      case '5':
        break;
        default:
          this.print('Enter Example: between (1-5)')
    }
  }
}
