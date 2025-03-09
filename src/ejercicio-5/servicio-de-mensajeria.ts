/**
 * Principio Violado:
 * Este diseño infringe el Principio de Inversión de Dependencias, ya que la clase Notifier 
 * está directamente vinculada a las clases específicas EmailService y ShortMessageService, 
 * en vez de tener una abstracción como dependencia.
 *
 * Solución:
 * Para cumplir con el Principio de Inversión de Dependencias, necesitamos que Notifier se 
 * apoye en una interfaz genérica en vez de clases concretas.
 */

// Código corregido con los principios SOLID

interface NotificationService {
    notify(message: string): void;
  }
  
  class EmailService implements NotificationService {
    notify(message: string): void {
      console.log(`Sending notification by email: ${message}`);
    }
  }
  
  class ShortMessageService implements NotificationService {
    notify(message: string): void {
      console.log(`Sending notification by SMS: ${message}`);
    }
  }
  
  class Notifier {
    constructor(private notificationService: NotificationService) {}
  
    sendNotification(message: string): void {
      this.notificationService.notify(message);
    }
  }

  const emailNotifier = new Notifier(new EmailService());
  emailNotifier.sendNotification("Hello World!");
  
  const shortMessageNotifier = new Notifier(new ShortMessageService());
  shortMessageNotifier.sendNotification("Hello World!");