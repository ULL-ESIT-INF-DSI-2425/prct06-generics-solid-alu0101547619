/**
 * Principio Violado:
 * El codigo viola el Principio de Separación de Interferencias.  Este principio sostiene 
 * que las interfaces deben ser personalizadas para el cliente y no forzar a las clases a poner 
 * en práctica métodos que no requieren.  En esta situación, la interfaz PrintableScannable exige 
 * que las clases Printer y Scanner implementen el método que no emplean habitualmente.  
 *
 * Solución:
 * La opción sería segmentar la interfaz PrintableScannable en dos unidades distintas: una destinada 
 * a las funciones de impresión y otra a las funciones de escaneo.  Por lo tanto, las clases Printer 
 * solo utilizarán la interfaz para imprimir y las clases Scanner solo utilizarán la interfaz para scanner.
 */

// Código corregido con los principios SOLID

interface Printable {
    print(): void;
  }
  
  interface Scannable {
    scan(): void;
  }
  
  class Printer implements Printable {
    print(): void {
      console.log("Printing...");
    }
  }
  
  class Scanner implements Scannable {
    scan(): void {
      console.log("Scanning...");
    }
  }

  class PrinterScanner implements Printable, Scannable {
    print(): void {
      console.log("Printing...");
    }
  
    scan(): void {
      console.log("Scanning...");
    }
  }

  const printer = new Printer();
  printer.print();
  
  const scanner = new Scanner();
  scanner.scan(); 
  
  const printerScanner = new PrinterScanner();
  printerScanner.print();
  printerScanner.scan();