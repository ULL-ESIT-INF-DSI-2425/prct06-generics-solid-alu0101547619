import { describe, it, expect, beforeEach, vi } from 'vitest';
import { BibliotecaMusical } from '../src/ejercicio-2/biblioteca';
import { Artista, Single } from '../src/ejercicio-2/artista';
import { Disco } from '../src/ejercicio-2/disco';
import { Cancion } from '../src/ejercicio-2/cancion';

let biblioteca;
let cancion1, cancion2, cancion3;
let disco, single;
let artista;

beforeEach(() => {
    biblioteca = new BibliotecaMusical();
    
    cancion1 = new Cancion("Song 1", 180, ["Pop"], true, 1000);
    cancion2 = new Cancion("Song 2", 200, ["Rock"], false, 500);
    cancion3 = new Cancion("Song 3", 150, ["Jazz"], true, 200);

    disco = new Disco("Album 1", 2020, [cancion1, cancion2]);
    single = new Single("Single 1", 2022, [cancion3]);

    artista = new Artista("Artista 1", 50000, [disco, single]);
    biblioteca.agregarArtista(artista);
});

describe('BibliotecaMusical', () => {
    it('debe agregar un artista a la biblioteca', () => {
        expect(biblioteca.artistas.length).toBe(1);
    });

    it('debe calcular correctamente el número de canciones de un disco', () => {
        expect(biblioteca.number_song("Album 1")).toBe(2);
    });

    it('debe calcular la duración total de un disco', () => {
        expect(biblioteca.disc_dur("Album 1")).toBe(380);
    });

    it('debe calcular correctamente el número de reproducciones de un disco', () => {
        expect(biblioteca.disc_rep("Album 1")).toBe(1500);
    });

    it('debe devolver 0 si el disco no existe', () => {
        expect(biblioteca.number_song("Nonexistent Album")).toBe(0);
        expect(biblioteca.disc_dur("Nonexistent Album")).toBe(0);
        expect(biblioteca.disc_rep("Nonexistent Album")).toBe(0);
    });

    it('debe mapear correctamente si una canción es single o no', () => {
        expect(biblioteca.mapSingle(cancion1)).toBe("Sí");
        expect(biblioteca.mapSingle(cancion2)).toBe("No");
    });

    it('debe mostrar la biblioteca correctamente', () => {
        const consoleTableMock = vi.spyOn(console, "table").mockImplementation(() => {});
        const consoleLogMock = vi.spyOn(console, "log").mockImplementation(() => {});

        biblioteca.mostrarBiblioteca();

        expect(consoleTableMock).toHaveBeenCalled();
        expect(consoleLogMock).toHaveBeenCalledWith("\nDiscografía de Artista 1:");

        consoleTableMock.mockRestore();
        consoleLogMock.mockRestore();
    });

    it('debe buscar y mostrar información de un disco correctamente', () => {
        const consoleTableMock = vi.spyOn(console, "table").mockImplementation(() => {});

        biblioteca.search("disco", "Album 1");

        expect(consoleTableMock).toHaveBeenCalledWith([
            { Nombre: "Album 1", Año: 2020, "Número de Canciones": 2 }
        ]);

        consoleTableMock.mockRestore();
    });

    it('debe buscar y mostrar información de un single correctamente', () => {
        const consoleTableMock = vi.spyOn(console, "table").mockImplementation(() => {});

        biblioteca.search("single", "Single 1");

        expect(consoleTableMock).toHaveBeenCalledWith([
            { Nombre: "Single 1", Año: 2022, "Número de Canciones": 1 }
        ]);

        consoleTableMock.mockRestore();
    });

    it('debe buscar y mostrar información de un artista correctamente', () => {
        const consoleTableMock = vi.spyOn(console, "table").mockImplementation(() => {});

        biblioteca.search("artista", "Artista 1");

        expect(consoleTableMock).toHaveBeenCalledWith([
            { Nombre: "Artista 1", "Oyentes Mensuales": 50000, "Número de Discos/Singles": 2 }
        ]);

        consoleTableMock.mockRestore();
    });

    it('debe mostrar un mensaje de error si el filtro no es válido', () => {
        const consoleLogMock = vi.spyOn(console, "log").mockImplementation(() => {});

        biblioteca.search("invalido", "Dato");

        expect(consoleLogMock).toHaveBeenCalledWith("Filtro no encontrado");

        consoleLogMock.mockRestore();
    });

});
