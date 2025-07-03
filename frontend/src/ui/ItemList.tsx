export const ItemList = ({
	items,
	onAddItem,
}: {
	items: any[];
	onAddItem: (item: any) => void;
}) => {
	return (
		<div>
			<h3>Available Items</h3>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						{item.name} - Price: {item.unitPrice}
						<button onClick={() => onAddItem(item)}>Add</button>
					</li>
				))}
			</ul>
		</div>
	);
};
