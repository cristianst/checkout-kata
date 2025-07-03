// Represents a special offer for an item (e.g., 2 for 45)
export type Offer = {
	quantity: number; // Number of items required for the offer (e.g., 2)
	price: number; // Total price for the offer (e.g., 45)
};

// Represents a supermarket item
export type Item = {
	id: string; // Unique identifier (e.g., "apple")
	name: string; // Display name
	unitPrice: number; // Price for a single item
	offer?: Offer; // Optional special offer
};

export type BasketItem = Item & {
	basketItemId: string;
};
