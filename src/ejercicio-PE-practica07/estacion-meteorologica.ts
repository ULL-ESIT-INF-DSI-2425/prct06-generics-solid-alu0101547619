import * as Obs from "../ejercicio-PE-practica07/observable.js";

export enum WeatherEventType {'se acerca una tormenta', 'bajando temperaturas', 'aumentando temperaturas', 'NO_EVENT'};

export class EstacionMeteorologica implements Obs.Observable {
    private observers: Obs.Observer[] = [];
    private eventType: WeatherEventType = WeatherEventType.NO_EVENT;

    /**
     * Constructor de la clase con id y name para su identificación
     * @param id Identificador de la señal de la estación meteorologica
     * @param name Nombre de la señal
     */
    constructor(private id: number, private name: string) {
    }

    /**
     * Getter del atributo ID
     * @returns Retorna el id de la clase
     */
    getId() {
        return this.id;
    }

    /**
     * Getter del atribito name
     * @returns Retorna el string del name de la clase
     */
    getName() {
        return this.name;
    }

    /**
     * Getter del atributo event type
     * @returns Retorna el tipo de evento a emitir
     */
    getEventType() {
        return this.eventType;
    }

    /**
     * Añade al array de observer las entidades a ser obvervadas
     */
    subscribe(observer: Obs.Observer): void {
        if (this.observers.includes(observer)) {
            throw new Error('The observer had already been subscribed');
        } else {
            this.observers.push(observer);
        }
    }

    /**
     * Elimina del array observer la entidad (nombrada como Obs.observer) a querer desuscribirse
     * @param observer 
     */
    unsubscribe(observer: Obs.Observer): void {
        const index = this.observers.indexOf(observer);
        if (index === -1) {
        throw new Error('The observer has not been subscribed');
        } else {
        this.observers.splice(index, 1);
        }
    }

    /**
     * Metodo que nofitica a todo los observadores de  la actualización del mismo
     */
    notify() {
        this.observers.forEach((observer) => observer.update(this));  
    }

    /**
     * Metodo que cambia el tipo de evento a se acerca una tormenta y que lo notifica a todas las entidades observadas
     */
    storm(){
        this.eventType = WeatherEventType["se acerca una tormenta"];
        this.notify();
    }

    /**
     * Metodo que cambia el tipo de evento a bajando temperaturas y que lo notifica a todas las entidades observadas
     */
    low_temperature() {
        this.eventType = WeatherEventType["bajando temperaturas"];
        this.notify();
    }

    /**
     * Metodo que cambia el tipo de evento a aumentando temperaturas y que lo notifica a todas las entidades observadas
     */
    high_temperature() {
        this.eventType = WeatherEventType["aumentando temperaturas"];
        this.notify();
    }
}
