import { describe, it, expect } from "vitest";
import { list } from "../src/ejercicio-PE/listas";

describe("list<T> Methods Test", () => {
    let mylist = new list<number>([2, 4 ,6]);
    let mylist2 = new list<number>([1]);

    it("append should add elements of first list to second list", () => {
        mylist2.append(mylist);
        expect(mylist2).toEqual({"_mylist": [1,],}); 
    });

    it("append should add elements of first list to second list", () => {
        mylist.append(mylist2);
        expect(mylist).toEqual({"_mylist": [2,4,6,1,],}); 
    });

    it("concatenate should merge multiple lists into a new list", () => {
        let result = mylist.concatenate(mylist2, mylist);
        expect(result).toEqual([ 2, 4, 6, 1, 1, 2, 4, 6, 1, 2, 4, 6, 1 ]);
    });


    it("should search documentaries by name", () => {
    expect(mylist.lenght()).toBe(4);
    });

    it("should search documentaries by name", () => {
        expect(mylist.reverse()).toStrictEqual([ 1, 6, 4, 2 ]);
    });

});