import { ICancion, Cancion } from './cancion';

export interface IDisco {
    nombre: string;
    anio: number;
    canciones: ICancion[];
}

export class Disco {
    constructor(public nombre: string, public anio: number, public canciones: ICancion[]) {}
}