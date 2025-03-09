export interface Searchable<T> {
    searchByName(name: string): T[];
    searchByYear(year: number): T[];
}
  
export interface Modifiable<T> {
    addItem(item: T): void;
    removeItem(item: T): void;
}

export interface Streamable<T> extends Searchable<T>, Modifiable<T> {
    getAll(): T[];
}

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
    constructor(protected items: T[]) {
    }
    
    /**
     * Agrega un nuevo elemento a la colección.
     * @param item Elemento de tipo T que se añadirá a la colección.
     */
    addItem(item: T): void {
      this.items.push(item);
    }
  
    /**
     * Elimina un elemento de la colección si existe.
     * @param item Elemento de tipo T que se eliminará de la colección.
     */
    removeItem(item: T): void {
      this.items = this.items.filter(i => i !== item);
    }
  
    /**
     * Devuelve todos los elementos de la colección.
     * @returns Un array de elementos de tipo T que están en la colección.
     */
    getAll(): T[] {
      return this.items;
    }
  
    /**
     * Busca elementos en la colección cuyo nombre coincida parcial o totalmente con el nombre dado.
     * @param name Nombre o parte del nombre del elemento a buscar.
     * @returns Un array de elementos de tipo T que coinciden con el criterio de búsqueda.
     */
    abstract searchByName(name: string): T[];

     /**
     * Busca elementos en la colección que correspondan al año especificado.
     * @param year Año de los elementos a buscar.
     * @returns Un array de elementos de tipo T que coinciden con el año especificado.
     */
    abstract searchByYear(year: number): T[];
}