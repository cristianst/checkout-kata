import Router from 'koa-router';
import { ItemController } from '../controllers/itemController';

const itemsRouter = new Router();

itemsRouter.get('/items', ItemControllers.getItems);

export { itemsRouter }; 
