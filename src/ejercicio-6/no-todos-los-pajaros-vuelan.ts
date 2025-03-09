/**
 * Principio Violado:
 * Este diseño infringe el Principio de Sustitución de Liskov ya que la clase Penguin hereda de Bird,
 * pero no tiene la habilidad de volar, lo que implica que no se puede reemplazar a su clase inicial 
 * sin modificar el comportamiento previsto.  Si un código anticipa un objeto Bird y utiliza el método fly(), 
 * no debería haber un pingüino en esa posición debido a que su comportamiento es distinto.
 *
 * Solución:
 * Para cumplir con el Principio de Sustitución de Liskov, es necesario alterar la jerarquía de clases con 
 * el fin de distinguir las aves capaces de volar de las que no lo pueden.  Es posible hacerlo mediante el 
 * uso de interfaces o clases base distintas.
 */

// Código corregido con los principios SOLID

interface Volador {
    volar(): void;
  }
  
class Bird {
    comer(): void {
      console.log("Respirando...");
    }
}
  
class FlyingBird extends Bird implements Volador {
    volar(): void {
      console.log("Volando...");
    }
}
  
class Sparrow extends FlyingBird {}
  
class Penguin extends Bird {}