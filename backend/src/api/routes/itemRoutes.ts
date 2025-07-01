import Router from 'koa-router';
import { ItemController } from '../controllers/ItemController';

const itemsRouter = new Router();

itemsRouter.get('/items', ItemController.getItems);

export { itemsRouter }; 
