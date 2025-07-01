import { Context } from "koa";
import { CheckoutService } from "../../services/CheckoutService";

export const ItemController = {
	getItems: (ctx: Context) => {
		ctx.body = CheckoutService.getItems();
	}
}