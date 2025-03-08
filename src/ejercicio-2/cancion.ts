export interface ICancion {
    nombre: string;
    duracion: number;
    generos: string[];
    single: boolean;
    reproducciones: number;
}

export class Cancion implements ICancion {
    constructor(public nombre: string, public duracion: number, public generos: string[], public single: boolean,
                public reproducciones: number) {}

}