import { BasicStreamableCollection } from './BasicStreamableCollection';

export class documentary extends BasicStreamableCollection<{ title: string; year: number; topic: string }> {
    constructor(items: { title: string; year: number; topic: string }[]) {
        super(items);
    }

    /**
     * Busca documentales en la colección cuyo título coincida parcial o totalmente con el nombre dado.
     * @param name Nombre o parte del nombre del documental a buscar.
     * @returns Un array de documentales cuyo título contiene el nombre especificado.
     */
    searchByName(name: string) {
        return this.items.filter(doc => doc.title.toLowerCase().includes(name.toLowerCase()));
    }

     /**
     * Busca documentales en la colección que fueron lanzados en el año especificado.
     * @param year Año de lanzamiento del documental a buscar.
     * @returns Un array de documentales que coinciden con el año especificado.
     */
    searchByYear(year: number) {
        return this.items.filter(doc => doc.year === year);
    }
}