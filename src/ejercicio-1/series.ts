import { BasicStreamableCollection } from './BasicStreamableCollection';

class series extends BasicStreamableCollection<{ title: string; year: number; seasons: number }> {
    constructor(items: { title: string; year: number; seasons: number }[]) {
        super(items);
    }

    searchByName(name: string) {
        return this.items.filter(series => series.title.toLowerCase().includes(name.toLowerCase()));
    }

    searchByYear(year: number) {
        return this.items.filter(series => series.year === year);
    }
}