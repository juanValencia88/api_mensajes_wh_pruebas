import { MessageData } from "../interfaces";

  // Crear el objeto de mensaje una vez para evitar duplicados
  const messageData: MessageData = {
    messaging_product: 'whatsapp',
    type: 'template',
    to: '', // Agregado para configurar el destinatario
    template: {
      name: '',
      language: { code: 'es' },
      components: [
        {
          type: 'header',
          parameters: [
            {
              type: 'image',
              image: {
                link: '',
              },
            },
          ],
        },
        {
          type: 'body',
          parameters: [
            {
              type: 'text',
              text: '',
            },
          ],
        },
      ],
    },
  };
  
  export default messageData;
  