import { ItemsRepository } from "../data/ItemsRepository";
import { Item } from "../types";

export const CheckoutService = {
	getItems: (): Item[] => ItemsRepository.getItems(),

	calculateTotal: (selectedItems: Item[]): { total: number } => {
		/**
		 * Step 1: Group items by ID to count quantities and store item details
		 * This allows us to process each item type once with its total quantity
		 */

		const itemCounts = new Map<string, number>(); // itemId -> quantity
		const itemMap = new Map<string, Item>(); // itemId -> item details

		// Count how many of each item we have and store the item details
		for (const item of selectedItems) {
			const count = itemCounts.get(item.id) || 0;
			itemCounts.set(item.id, count + 1);
			itemMap.set(item.id, item);
		}

		// console.dir(itemCounts);
		// console.dir(itemMap);

		// Hold the total price of the basket (with offers applied)
		let total = 0;

		// Step 2: Calculate total for each item type
		for (const [itemId, quantity] of itemCounts) {
			const item = itemMap.get(itemId)!;

			// Step 3: Check if item has an offer and if quantity meets the requirement
			if (item.offer && quantity >= item.offer.quantity) {
				// Apply offers: calculate how many complete offers we can apply
				const offerCount = Math.floor(quantity / item.offer.quantity); // e.g., 4 apples / 2 = 2 offers
				const remainingItems = quantity % item.offer.quantity; // e.g., 4 apples % 2 = 0 remaining

				// Calculate price: (offers × offer price) + (remaining items × unit price)
				total +=
					offerCount * item.offer.price +
					remainingItems * item.unitPrice;
			} else {
				// No offer available or quantity not met, use regular unit price
				total += quantity * item.unitPrice;
			}
		}

		return { total };
	},
};
