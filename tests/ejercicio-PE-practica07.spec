import { describe, it, expect, beforeEach, vi } from 'vitest';
import { EstacionMeteorologica } from '../src/ejercicio-PE-practica07/estacion-meteorologica.js';
import { Movil } from '../src/ejercicio-PE-practica07/movil.js';
import { Panel } from '../src/ejercicio-PE-practica07/panel.js';

const myestacionMeteorologica = new EstacionMeteorologica(9000, "Estacion de las cañadas");
const firstMobile = new Movil(0, 'Andrea', 'Samgsumg');
const secondMobile = new Movil(1, 'Antonio', `Iphone`);

const firstpanel = new Panel(0, 'Andrea', 'La orotava', "2x2" );
const secondpanel = new Panel(1, 'Antonio', `Lso realejos`, "30x30");

console.log('firstMobile subscription');
myestacionMeteorologica.subscribe(firstMobile);

console.log('secondMobile subscription');
myestacionMeteorologica.subscribe(secondMobile);

describe('EstacionMeteorologica', () => {
    it('debe agregar un artista a la biblioteca', () => {
        expect(myestacionMeteorologica.getId()).toBe(9000);
    });
    it('debe agregar un artista a la biblioteca', () => {
        expect(myestacionMeteorologica.getName()).toBe("Estacion de las cañadas");
    });
    it('debe agregar un artista a la biblioteca', () => {
        expect(myestacionMeteorologica.getEventType()).toBe(0);
    });
    let some = myestacionMeteorologica.storm();
    it('debe agregar un artista a la biblioteca', () => {
        expect(some).toBe("The movile of Andrea  with the model of Samgsumg and it have observed that the Station Estacion de las cañadas says that a storm is coming/nThe movile of Antonio  with the model of Iphone and it have observed that the Station Estacion de las cañadas says that a storm is coming");
    });
    myestacionMeteorologica.unsubscribe(firstMobile);
    it('debe agregar un artista a la biblioteca', () => {
        expect(myestacionMeteorologica.low_temperature()).toBe("The movile of Andrea  with the model of Samgsumg and it have observed that the Station Estacion de las cañadas says that a storm is coming/nThe movile of Antonio  with the model of Iphone and it have observed that the Station Estacion de las cañadas says that a storm is coming");
    });
    it('debe agregar un artista a la biblioteca', () => {
        expect(myestacionMeteorologica.high_temperature()).toBe("The movile of Andrea  with the model of Samgsumg and it have observed that the Station Estacion de las cañadas says that a storm is coming/nThe movile of Antonio  with the model of Iphone and it have observed that the Station Estacion de las cañadas says that a storm is coming");
    });

});
