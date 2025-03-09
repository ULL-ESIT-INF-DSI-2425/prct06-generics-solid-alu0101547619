import { BasicStreamableCollection } from './BasicStreamableCollection';

export class peliculas extends BasicStreamableCollection<{ title: string; year: number; director: string }> {
    constructor(items: { title: string; year: number; director: string }[]) {
        super(items);
    }

    /**
     * Filtra los elementos (películas) que contienen el nombre proporcionado en su título.
     * @param name El nombre o fragmento de nombre que se busca en el título de las películas.
     * @returns Un array de películas que contienen el nombre especificado en su título.
     */
    searchByName(name: string) {
        return this.items.filter(movie => movie.title.toLowerCase().includes(name.toLowerCase()));
    }

    /**
     * Filtra los elementos (películas) que fueron lanzadas en el año proporcionado.
     * @param year El año de lanzamiento de las películas a buscar.
     * @returns Un array de películas que fueron lanzadas en el año especificado.
     */
    searchByYear(year: number) {
        return this.items.filter(movie => movie.year === year);
    }
}
