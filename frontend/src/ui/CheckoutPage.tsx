import { useEffect } from "react";
import { useCheckout } from "../hooks/useCheckout";
import { ItemList } from "./ItemList";
import { Basket } from "./Basket";

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

	useEffect(() => {
		console.log("basket changed", basket);
		calculateTotal();
	}, [basket]);

	return (
		<div style={{ width: "40em" }}>
			<h2>Checkout</h2>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div>
					<ItemList items={items} onAddItem={addItem} />
				</div>
				<div>
					<Basket
						basket={basket}
						onRemoveItem={removeItem}
						total={total}
					/>
				</div>
			</div>
		</div>
	);
};
