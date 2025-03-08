interface Searchable<T> {
    searchByName(name: string): T[];
    searchByYear(year: number): T[];
}
  
interface Modifiable<T> {
    addItem(item: T): void;
    removeItem(item: T): void;
}
  
interface Streamable<T> extends Searchable<T>, Modifiable<T> {
    getAll(): T[];
}
  

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
    constructor(protected items: T[]) {
    }
  
    addItem(item: T): void {
      this.items.push(item);
    }
  
    removeItem(item: T): void {
      this.items = this.items.filter(i => i !== item);
    }
  
    getAll(): T[] {
      return this.items;
    }
  
    abstract searchByName(name: string): T[];
    abstract searchByYear(year: number): T[];
}