import type { BasketItem } from "../types";

export const Basket = ({
	basket,
	onRemoveItem,
	clearBasket,
	total,
}: {
	basket: BasketItem[];
	onRemoveItem: (itemId: string) => void;
	clearBasket: () => void;
	total: number;
}) => {
	return (
		<div>
			<h3>Basket Items:</h3>
			{basket.length === 0 ? (
				<div>No items in basket</div>
			) : (
				<>
					<div>
						<ul>
							{basket.map((item) => (
								<li key={item.basketItemId}>
									{item.name} - Price: {item.unitPrice}
									<button
										onClick={() =>
											onRemoveItem(item.basketItemId)
										}
									>
										Remove
									</button>
								</li>
							))}
						</ul>
					</div>
					<div>Total: {total}</div>
					<button onClick={clearBasket}>Clear Basket</button>
				</>
			)}
		</div>
	);
};
