import { Artista, Single } from './artista';
import { ICancion, Cancion } from './cancion';
import { Disco } from './disco';

export class BibliotecaMusical {
    private artistas: Artista[] = [];

    agregarArtista(artista: Artista): void {
        this.artistas.push(artista);
    }

    mostrarBiblioteca(): void {
        console.table(this.artistas.map(a => ({
            Nombre: a.nombre,
            "Oyentes Mensuales": a.oyentesMensuales,
            "Número de Discos/Singles": a.discografia.length
        })));

        this.artistas.forEach(artista => {
            console.log(`\nDiscografía de ${artista.nombre}:`);
            // Mostramos tanto discos como singles
            artista.discografia.forEach(item => {
                if ('anio' in item) {
                    console.table({
                        Tipo: item instanceof Disco ? 'Disco' : 'Single',
                        Nombre: item.nombre,
                        Año: item.anio,
                        "Número de Canciones": item.canciones.length
                    });
                }
            });

            artista.discografia.forEach(item => {
                if (item instanceof Disco || item instanceof Single) {
                    console.log(`\nCanciones del ${item instanceof Disco ? 'Disco' : 'Single'} "${item.nombre}":`);
                    console.table(item.canciones.map(cancion => ({
                        Nombre: cancion.nombre,
                        Duración: cancion.duracion,
                        Géneros: cancion.generos.join(", "),
                        Single: this.mapSingle(cancion),
                        Reproducciones: cancion.reproducciones
                    })));
                }
            });
        });
    }

    mapSingle(cancion: Cancion): string {
        return cancion.single ? "Sí" : "No";
    }

    search(filtro: string, dato: string): void {
        this.artistas.filter(artista => {
            switch(filtro) {
                case "disco":
                    const discos = artista.discografia.filter(disco => disco instanceof Disco && disco.nombre === dato);
                    console.table(discos.map(disco => ({
                        Nombre: disco.nombre,
                        Año: disco.anio,
                        "Número de Canciones": disco.canciones.length
                    })));
                    break;
                case "single":
                    const singles = artista.discografia.filter(single => single instanceof Single && single.nombre === dato);
                    console.table(singles.map(single => ({
                        Nombre: single.nombre,
                        Año: single.anio,
                        "Número de Canciones": single.canciones.length
                    })));
                    break;
                case "artista":
                    const artista_ = this.artistas.filter(a => a.nombre === dato);
                    console.table(artista_.map(artista => ({
                        Nombre: artista.nombre,
                        "Oyentes Mensuales": artista.oyentesMensuales,
                        "Número de Discos/Singles": artista.discografia.length
                    })));
                    break;
                default:
                    console.log("Filtro no encontrado");
            }
        });
    }

    number_song(disc: string): number {
        for (const artista of this.artistas) {
            for (const item of artista.discografia) {
                if ('nombre' in item && item.nombre === disc) {
                    return item.canciones.length;
                }
            }
        }
        return 0;
    }

    disc_dur(disc: string): number {
        let result = 0;
        this.artistas.forEach(artista => {
            artista.discografia.forEach(item => {
                if ('nombre' in item && item.nombre === disc) {
                    item.canciones.forEach(song_ => result += song_.duracion);
                }
            });
        });
        return result;
    }

    disc_rep(disc: string): number {
        let result = 0;
        this.artistas.forEach(artista => {
            artista.discografia.forEach(item => {
                if ('nombre' in item && item.nombre === disc) {
                    item.canciones.forEach(song_ => result += song_.reproducciones);
                }
            });
        });
        return result;
    }
}
