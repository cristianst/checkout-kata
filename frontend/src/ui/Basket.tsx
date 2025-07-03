export const Basket = ({
	basket,
	onRemoveItem,
	total,
}: {
	basket: any[];
	onRemoveItem: (item: any) => void;
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
									<button onClick={() => onRemoveItem(item)}>
										Remove
									</button>
								</li>
							))}
						</ul>
					</div>
					<div>Total: {total}</div>
				</>
			)}
		</div>
	);
};
