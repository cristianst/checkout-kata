import { Context } from "koa";
import { CheckoutService } from "../../services/CheckoutService";
import { Item } from "../../types";

export const CheckoutController = {
	calculateTotal: (ctx: Context) => {
		// In a real world scenario we would validate the request here
		// using something like zod or joi
		const { items } = ctx.request.body as { items: Item[] };
		ctx.body = CheckoutService.calculateTotal(items);
	},
};
