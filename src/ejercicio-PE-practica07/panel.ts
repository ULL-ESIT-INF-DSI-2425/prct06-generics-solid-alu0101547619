import * as Obs from "../ejercicio-PE-practica07/observable.js";
import { EstacionMeteorologica, WeatherEventType } from '../ejercicio-PE-practica07/estacion-meteorologica.js';

export class Panel implements Obs.Observer {
    /**
     * Constructor de la clase movil
     * @param id Id unico para el movil
     * @param name Numero de móvil
     * @param model Modelo de móvil
     */
    constructor(private id: number, private name: string, private location: string, private size: string) {}
    
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
    getLocation() {
        return this.location;
    }

    getSize() {
        return this.size;
    }

    update(observable: Obs.Observable) {
        if (observable instanceof EstacionMeteorologica) {
          switch(observable.getEventType()) {
            case WeatherEventType["se acerca una tormenta"]:
              console.log(`The Panel of ${this.name} ` + ` with the location of ${this.location} ` + ` and size ${this.size} ` +
                          `and it have observed that the Station ${observable.getName()} ` +
                          `says that a storm is coming`);
              break;
            case WeatherEventType["bajando temperaturas"]:
                console.log(`The Panel of ${this.name} ` + ` with the location of ${this.location} ` + ` and size ${this.size} ` +
                    `and it have observed that the Station ${observable.getName()} ` +
                    `says that a storm is coming`);
              break;
              case WeatherEventType["aumentando temperaturas"]:
                console.log(`The Panel of ${this.name} ` + ` with the location of ${this.location} ` + ` and size ${this.size} ` +
                    `and it have observed that the Station ${observable.getName()} ` +
                    `says that a storm is coming`);
              break;
          }
        }
      }
}
