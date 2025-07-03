import Router from "koa-router";
import { CheckoutController } from "../controllers/CheckoutController";

const checkoutRouter = new Router();

checkoutRouter.post("/checkout/total", CheckoutController.calculateTotal);

export { checkoutRouter };
