import { BasicStreamableCollection } from './BasicStreamableCollection';

export class series extends BasicStreamableCollection<{ title: string; year: number; seasons: number }> {
    constructor(items: { title: string; year: number; seasons: number }[]) {
        super(items);
    }

    /**
     * Filtra las series que contienen el nombre proporcionado en su título.
     * @param name El nombre o fragmento de nombre que se busca en el título de las series.
     * @returns Un array de series que contienen el nombre especificado en su título.
     */
    searchByName(name: string) {
        return this.items.filter(series => series.title.toLowerCase().includes(name.toLowerCase()));
    }

    /**
     * Filtra las series que fueron lanzadas en el año proporcionado.
     * @param year El año de lanzamiento de las series a buscar.
     * @returns Un array de series que fueron lanzadas en el año especificado.
     */
    searchByYear(year: number) {
        return this.items.filter(series => series.year === year);
    }
}