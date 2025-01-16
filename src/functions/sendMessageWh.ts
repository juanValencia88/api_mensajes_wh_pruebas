import 'dotenv/config';
import axios from 'axios';
import { API_META, WH_TOKEN, WH_NUMBER } from '../config/envs';
import { MessageData } from '../interfaces';

// Función para enviar mensajes a WhatsApp a través de la API
export async function sendMessageWhatsApp(
  data: MessageData,
  api: string = `${API_META}/${WH_NUMBER}/messages`,
  token: string = WH_TOKEN || ''
): Promise<string | false> {
  try {
    // Enviar la solicitud POST a la API de WhatsApp
    const response = await axios.post(api, data, {
      maxBodyLength: Infinity,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    // Procesar la respuesta de la API
    const responseData = response.data;
    console.log(responseData);

    if (responseData.messages && responseData.messages[0].message_status === 'accepted') {
      return responseData.messages[0].id;
    } else {
      console.log('******************Ingrese al try antes del false de sendMessageWhatsApp*********************');
      return false;
    }
  } catch (error: any) {
    // Manejo de errores
    console.error('Error en la función sendMessageWhatsApp:', error.message);
    console.log('**********************************Ingrese al catch antes del false de sendMessageWhatsApp*******************************');

    // Verificar si el error tiene una respuesta de la API
    if (error.response) {
      console.error('Error response data:', error.response.data);
    }

    return false;
  }
}
