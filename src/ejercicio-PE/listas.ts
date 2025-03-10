import { get } from "http";

export class list<T> {
    constructor(private _mylist: T[]) {};

    get mylist() {
        return this._mylist;
    }
    set mylist(mylist) {
        this._mylist = mylist;
    } 

    push(element: T) {
        this._mylist[this._mylist.length] = element;
    }

    /**
     * Metodo que añade al final de la segunda lista los elmeentos de la primera
     * @param second_list Lista donde se añadiran los elementso de la primera
     */
    append( second_list: list<T>) {
       this.mylist.forEach(element => {
            second_list.push(element);
       });
    }

    /**
     * Metodo que añade los ementos de las listas en una lista nueva
     * @param first_list Primera lista con elemntos propios
     * @param second_list Segunda lista con elementos propios
     * @param otherlist 
     * @returns Retorna la lista con todos los elemntos de cada una de las listas
     */
    concatenate(second_list: list<T>, ...otherlist: list<T>[]): T[] {
        let my_final_list: T[] = [...this._mylist, ...second_list.mylist];
        otherlist.forEach(anotherlist => {
            my_final_list.push(...anotherlist.mylist);
        });
        return my_final_list;
    }
    
    /**
     * Metodo que retorna una lista con los atributos filtrados
     * @param primera_lista Lista a filtrar
     * @param predicado Entidad a ver en la lista
     * @returns Lista filtrada
     */
    filter(primera_lista: list<T>, predicado: (item: T) => boolean): T[]{
        let resultado: T[] = [];
        primera_lista._mylist.forEach(element => {
          if (predicado(element)) resultado[resultado.length] = element;
        });
        return resultado;
      }

    /**
     * Metodo que retorna un number que es el numero de elemntos del array
     * @returns Numero de elementos
     */
    lenght(): number {
        let numb: number = 0;
        this._mylist.forEach(element => {
            numb++;
        })
        return numb;
    }

    map() {

    }

}

let mylist = new list<number>([2]);
let hola: number[] = [1];
let mylist2 = new list(hola);





console.log("Segunda lista antes del append:", mylist2);
mylist.append(mylist2);
console.log("Segunda lista después del append:", mylist2);
let mylist3 = mylist.concatenate(mylist2, mylist);
console.log("Lista concatenada:", mylist3); 
