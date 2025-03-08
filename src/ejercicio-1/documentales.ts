import { BasicStreamableCollection } from './BasicStreamableCollection';

class documentary extends BasicStreamableCollection<{ title: string; year: number; topic: string }> {
    constructor(items: { title: string; year: number; topic: string }[]) {
        super(items);
    }

    searchByName(name: string) {
        return this.items.filter(doc => doc.title.toLowerCase().includes(name.toLowerCase()));
    }

    searchByYear(year: number) {
        return this.items.filter(doc => doc.year === year);
    }
}