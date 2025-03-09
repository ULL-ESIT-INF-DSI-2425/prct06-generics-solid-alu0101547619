/**
 * Principio Violado:
 * Este código viola el Principio de Inversión de Dependencias.  Este principio sostiene que 
 * las clases de nivel superior no deben tener una dependencia directa de las clases de nivel inferior, 
 * sino de abstracciones.  
 *
 * Solución:
 * Para cumplir con el principio, podemos crear una abstracción que habilite a la clase FileManager a depender
 * de una interfaz en vez de una implementación específica. Esto nos facilitará la modificación de la aplicación 
 * de lectura y escritura de archivos sin necesidad de alterar FileManager.
 */

// Código corregido con los principios SOLID

import * as fs from "fs";

interface IStorage {
    read(): string;
    write(data: string): void;
}

class FileStorage implements IStorage {
    constructor(private filePath: string) {}

    read(): string {
        try {
            return fs.readFileSync(this.filePath, "utf-8");
        } catch (error) {
            throw new Error(`Error al leer el archivo: ${error.message}`);
        }
    }

    write(data: string): void {
        try {
            fs.writeFileSync(this.filePath, data, "utf-8");
            console.log("Archivo escrito exitosamente.");
        } catch (error) {
            throw new Error(`Error al escribir en el archivo: ${error.message}`);
        }
    }
}

class ErrorLogger {
    static logError(error: Error): void {
        console.error(`[ERROR]: ${error.message}`);
    }
}

class FileManager {
    constructor(private storage: IStorage) {}

    readFile(): string {
        try {
            return this.storage.read();
        } catch (error) {
            ErrorLogger.logError(error);
            return "";
        }
    }

    writeFile(data: string): void {
        try {
            this.storage.write(data);
        } catch (error) {
            ErrorLogger.logError(error);
        }
    }
}

const fileStorage = new FileStorage("example.txt");
const fileManager = new FileManager(fileStorage);

const currentContent = fileManager.readFile();
console.log("Current content:", currentContent);

const newData = "This is new content to be written into the file.";
fileManager.writeFile(newData);

const updatedContent = fileManager.readFile();
console.log("Updated content:", updatedContent);
