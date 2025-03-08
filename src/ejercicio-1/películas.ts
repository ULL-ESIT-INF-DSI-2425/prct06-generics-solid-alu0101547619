import { BasicStreamableCollection } from './BasicStreamableCollection';

class peliculas extends BasicStreamableCollection<{ title: string; year: number; director: string }> {
    constructor(items: { title: string; year: number; director: string }[]) {
        super(items);
    }

    searchByName(name: string) {
        return this.items.filter(movie => movie.title.toLowerCase().includes(name.toLowerCase()));
    }

    searchByYear(year: number) {
        return this.items.filter(movie => movie.year === year);
    }
}
