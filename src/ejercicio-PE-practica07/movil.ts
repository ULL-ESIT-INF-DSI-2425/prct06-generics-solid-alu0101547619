import * as Obs from "../ejercicio-PE-practica07/observable.js";
import { EstacionMeteorologica, WeatherEventType } from '../ejercicio-PE-practica07/estacion-meteorologica.js';

export class Movil implements Obs.Observer {
    /**
     * Constructor de la clase movil
     * @param id Id unico para el movil
     * @param name Numero de móvil
     * @param model Modelo de móvil
     */
    constructor(private id: number, private name: string, private model: string) {}
    
    /**
     * Getter del ID de la clase 
     * @returns Retorna el id del clase
     */
    getId() {
        return this.id;
    }

    /**
     * Getter del name de la clase 
     * @returns Retorna el nombre del movil de la clase
     */
    getName() {
        return this.name;
    }

    /**
     * Getter del modelo del movil
     * @returns Retorna el modelo del movil de la clase
     */
    getModel() {
        return this.model;
    }

    /**
     * metodo que actualiza y notifica al movil sobre los diferentes eventos
     * @param observable 
     */
    update(observable: Obs.Observable) {
        if (observable instanceof EstacionMeteorologica) {
          switch(observable.getEventType()) {
            case WeatherEventType["se acerca una tormenta"]:
              console.log(`The movile of ${this.name} ` + ` with the model of ${this.model} ` +
                          `and it have observed that the Station ${observable.getName()} ` +
                          `says that a storm is coming`);
              break;
            case WeatherEventType["bajando temperaturas"]:
              return String(`The movile owner is ${this.name} ` + ` with the model of ${this.model} ` +
                            `and it have observed that the Station ${observable.getName()} ` +
                            `says that the temperature is becoming lower`);
              break;
              case WeatherEventType["aumentando temperaturas"]:
                return String(`The movile owner is ${this.name} ` + ` with the model of ${this.model} ` +
                              `and it have observed that the Station ${observable.getName()} ` +
                              `says that the temperature is becoming higher`);
              break;
          }
        }
        return "";
      }
}

const myestacionMeteorologica = new EstacionMeteorologica(9000, "Estacion de las cañadas");
const firstMobile = new Movil(0, 'Andrea', 'Samgsumg');
const secondMobile = new Movil(1, 'Antonio', `Iphone`);

console.log('firstMobile subscription');
myestacionMeteorologica.subscribe(firstMobile);

console.log('secondMobile subscription');
myestacionMeteorologica.subscribe(secondMobile);

myestacionMeteorologica.storm()
