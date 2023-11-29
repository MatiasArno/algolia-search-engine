import { Router } from 'express';
import CommerceController from '../controllers/church';
import ServerController from '../controllers/server';
import handle405Error from '../middlewares/wrong-method-handler';

const mainRouter = Router();

mainRouter.get('/status', ServerController.getStatus);

mainRouter.post('/churches', CommerceController.createNew);

mainRouter.get('/churches/:id', CommerceController.getByID);
mainRouter.get('/churches-near-of', CommerceController.getNearLocation);

mainRouter.put('/churches/:id', CommerceController.updateByID);

mainRouter.all('/status', handle405Error);
mainRouter.all('/churches', handle405Error);
mainRouter.all('/churches-near-of', handle405Error);

export default mainRouter;
