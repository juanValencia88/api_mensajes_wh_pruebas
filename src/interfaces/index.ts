// Definir una interfaz para el objeto de mensaje
export interface MessageData {
  messaging_product: string; // Producto de mensajería (e.g., 'whatsapp')
  type: string; // Tipo de mensaje (e.g., 'template')
  to: string; // Número del destinatario
  template: {
    name: string; // Nombre de la plantilla
    language: {
      code: string; // Código del idioma (e.g., 'es')
    };
    components: Array<{
      type: string; // Tipo de componente (e.g., 'header', 'body')
      parameters: Array<{
        type: string; // Tipo de parámetro (e.g., 'image', 'text')
        image?: {
          link: string; // Enlace de la imagen (opcional si no es de tipo 'image')
        };
        text?: string; // Texto del parámetro (opcional si no es de tipo 'text')
      }>;
    }>;
  };
};
  