import { describe, it, expect, beforeEach } from "vitest";
import { BasicStreamableCollection } from "../src/ejercicio-1/BasicStreamableCollection";
import { documentary } from "../src/ejercicio-1/documentales";
import { peliculas} from "../src/ejercicio-1/películas";
import { series } from "../src/ejercicio-1/series";

describe("Documentary Collection", () => {
    let collection: documentary;

    beforeEach(() => {
        collection = new documentary([
            { title: "Planet Earth", year: 2006, topic: "Nature" },
            { title: "Inside Job", year: 2010, topic: "Finance" },
        ]);
    });

    it("should add a new documentary", () => {
        collection.addItem({ title: "Cosmos", year: 2014, topic: "Science" });
        expect(collection.getAll()).toHaveLength(3);
    });

    it("should remove a documentary", () => {
        collection.removeItem({ title: "Inside Job", year: 2010, topic: "Finance" });
        expect(collection.getAll()).toHaveLength(2);
    });

    it("should search documentaries by name", () => {
        expect(collection.searchByName("Planet")).toHaveLength(1);
    });

    it("should search documentaries by year", () => {
        expect(collection.searchByYear(2010)).toHaveLength(1);
    });

    it("should return all documentaries", () => {
        expect(collection.getAll()).toHaveLength(2);
    });
});

describe("Peliculas Collection", () => {
    let collection: peliculas;

    beforeEach(() => {
        collection = new peliculas([
            { title: "Inception", year: 2010, director: "Christopher Nolan" },
            { title: "The Matrix", year: 1999, director: "Wachowski Brothers" },
        ]);
    });

    it("should add a new movie", () => {
        collection.addItem({ title: "Interstellar", year: 2014, director: "Christopher Nolan" });
        expect(collection.getAll()).toHaveLength(3);
    });

    it("should remove a movie", () => {
        collection.removeItem({ title: "The Matrix", year: 1999, director: "Wachowski Brothers" });
        expect(collection.getAll()).toHaveLength(2);
    });

    it("should search movies by name", () => {
        expect(collection.searchByName("Inception")).toHaveLength(1);
    });

    it("should search movies by year", () => {
        expect(collection.searchByYear(2010)).toHaveLength(1);
    });

    it("should return all movies", () => {
        expect(collection.getAll()).toHaveLength(2);
    });
});

describe("Series Collection", () => {
    let collection: series;

    beforeEach(() => {
        collection = new series([
            { title: "Breaking Bad", year: 2008, seasons: 5 },
            { title: "Game of Thrones", year: 2011, seasons: 8 },
        ]);
    });

    it("should add a new series", () => {
        collection.addItem({ title: "Stranger Things", year: 2016, seasons: 4 });
        expect(collection.getAll()).toHaveLength(3);
    });

    it("should remove a series", () => {
        collection.removeItem({ title: "Game of Thrones", year: 2011, seasons: 8 });
        expect(collection.getAll()).toHaveLength(2);
    });

    it("should search series by name", () => {
        expect(collection.searchByName("Breaking")).toHaveLength(1);
    });

    it("should search series by year", () => {
        expect(collection.searchByYear(2011)).toHaveLength(1);
    });

    it("should return all series", () => {
        expect(collection.getAll()).toHaveLength(2);
    });
});
