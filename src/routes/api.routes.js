import {Router} from 'express';
import apiController from '../controllers/apiController'
const router = Router();
router.get('/:id', apiController.index);
router.post('/invitation/', apiController.getInvitationData)
router.put('/guestConfirm', apiController.guestConfirm);




export default router;