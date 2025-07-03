import { useEffect } from "react";
import { useCheckout } from "../hooks/useCheckout";
import { ItemList } from "./ItemList";

export const CheckoutPage = () => {
	const {
		basket,
		total,
		addItem,
		removeItem,
		clearBasket,
		calculateTotal,
		items,
	} = useCheckout();

	return (
		<div>
			<h2>Checkout</h2>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					<ItemList items={items} onAddItem={addItem} />
				</div>
				<div>Basket</div>
			</div>
		</div>
	);
};
