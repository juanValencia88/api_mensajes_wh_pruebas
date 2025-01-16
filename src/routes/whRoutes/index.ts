import { Router } from 'express';
import { WhatsAppController, WhatsAppService } from '../../services/whMessages';

const whRoutes: Router = Router();


const service = new WhatsAppService();
const controller = new WhatsAppController(service);
// Definir la ruta POST con el controlador
whRoutes.post('/api-messages-wh/sendMessage', (req, res) => controller.sendMessage(req, res));

export default whRoutes;
