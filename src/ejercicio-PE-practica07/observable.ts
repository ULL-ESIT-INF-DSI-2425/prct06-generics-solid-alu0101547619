/**
 * Interfaz que tiene tres metodos para las entidades observables
 */
export interface Observable {
    subscribe(observer: Observer): void;
    unsubscribe(observer: Observer): void;
    notify(): void;
}

/**
 * Interfaz con un metodo para actualizar a los observadores
 */
export interface Observer {
    update(observable: Observable): void;
}
