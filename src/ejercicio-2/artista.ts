import { IDisco } from './disco';
import {  ICancion } from './cancion';

export interface ISingle {
    nombre: string;
    anio: number;
    canciones: ICancion[];
}

export class Single implements ISingle {
    constructor(public nombre: string, public anio: number, public canciones: ICancion[]) {}
}

export type Discografia = (IDisco | ISingle)[];


export interface IArtista {
    nombre: string;
    oyentesMensuales: number;
    discografia: IDisco[];
}

export class Artista {
    constructor(
        public nombre: string,
        public oyentesMensuales: number,
        public discografia: Discografia // Puede ser una mezcla de discos y singles
    ) {}
}
