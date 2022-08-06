import {Router} from 'express';
import apiController from '../controllers/apiController'
const router = Router();
router.get('/:id', apiController.index);
router.post('/invitation/', apiController.getInvitationData)
router.put('/guestConfirm', apiController.guestConfirm);
router.get('/error/404', apiController.error)




export default router;