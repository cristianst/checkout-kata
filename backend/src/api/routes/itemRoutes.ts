import Router from 'koa-router';
import { ItemController } from '../controllers/ItemController';

const itemRouter = new Router();

itemRouter.get('/items', ItemController.getItems);

export { itemRouter };
