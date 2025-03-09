import { Artista, Single } from './artista';
import { ICancion, Cancion } from './cancion';
import { Disco } from './disco';

export class BibliotecaMusical {
    private artistas: Artista[] = [];

    /**
     * Agrega un nuevo artista a la lista de artistas.
     * @param artista El objeto de tipo `Artista` que se desea agregar a la lista.
     */
    agregarArtista(artista: Artista): void {
        this.artistas.push(artista);
    }

    /**
     * Muestra la biblioteca de artistas con información general y detalles de su discografía.
     */
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

    /**
     * Devuelve si una canción pertenece a un single.
     * @param cancion La canción a verificar si pertenece a un single.
     * @returns "Sí" si la canción es parte de un single, "No" si no lo es.
     */
    mapSingle(cancion: Cancion): string {
        return cancion.single ? "Sí" : "No";
    }

    /**
     * Realiza una búsqueda de artistas, discos o singles según el filtro y dato proporcionados.
     * @param filtro El tipo de filtro a aplicar ("artista", "disco", "single").
     * @param dato El valor que se va a buscar según el filtro especificado.
     */
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

    /**
     * Devuelve el número de canciones en un disco o single.
     * @param disc El nombre del disco o single cuyo número de canciones se desea obtener.
     * @returns El número de canciones en el disco o single especificado. Si no se encuentra, devuelve 0.
     */
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

    /**
     * Devuelve la duración total de un disco o single.
     * @param disc El nombre del disco o single cuya duración total se desea calcular.
     * @returns La duración total del disco o single especificado en segundos. Si no se encuentra, devuelve 0.
     */
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

    /**
     * Devuelve el número total de reproducciones de un disco o single.
     * @param disc El nombre del disco o single cuyo número total de reproducciones se desea obtener.
     * @returns El número total de reproducciones del disco o single especificado. Si no se encuentra, devuelve 0.
     */
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
