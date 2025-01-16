import { Request, Response } from 'express';
import axios from 'axios';
import { sendMessageWhatsApp } from '../../functions/sendMessageWh';
import messageData from '../../utils/MessageData';
import { MessageData } from '../../interfaces/index';



// Servicio para manejar la lógica de envío de mensajes
class WhatsAppService {
  async sendMessage(messageBody: MessageData): Promise<string | false> {
    console.log('***Cuerpo de mensaje ******** \n',messageBody)
    return await sendMessageWhatsApp(messageBody); // Reutiliza la función existente
  }
}

// Controlador para manejar solicitudes HTTP
class WhatsAppController {
  private readonly service: WhatsAppService;

  constructor(service: WhatsAppService) {
    this.service = service;
  }

  async sendMessage(req: Request, res: Response): Promise<void> {
    try {
      const { to, body, url, id_Plantilla} = req.body;
      console.log('*** Datos de la petición ******** \n', req.body)

      // Validación de los datos requeridos
      if (!to || !body || !url || !id_Plantilla) {
        res.status(400).json({ message: 'Datos incompletos o mal formados.' });
        return;
      }

      const messageBody: MessageData = messageData

      messageBody.template.name = id_Plantilla;
      if (messageBody.template && messageBody.template.components && messageBody.template.components[0] && messageBody.template.components[0].parameters && messageBody.template.components[0].parameters[0] && messageBody.template.components[0].parameters[0].image) {
        messageBody.template.components[0].parameters[0].image.link = url;
      } else {
        console.error('Invalid messageBody structure');
      }
      messageBody.to = to;
      messageBody.template.components[1].parameters[0].text = body;
      console.log('cUERPO DE MENSAJE \n',messageBody)
      console.log('LINK DE MENSAJE \n',messageBody.template?.components[0]?.parameters[0]?.image?.link)

      // Enviar mensaje usando el servicio
      const messageId = await this.service.sendMessage(messageBody);

      if (messageId) {
        res.status(200).json({ message: 'Mensaje enviado exitosamente.', messageId });
      } else {
        res.status(500).json({ message: 'El mensaje no fue aceptado por la API de WhatsApp.' });
      }
    } catch (error: any) {
      console.error('Error en el controlador:', error.message);
      res.status(500).json({ message: error.message });
    }
  }
}

// Exportación de clases
export { WhatsAppService, WhatsAppController };
