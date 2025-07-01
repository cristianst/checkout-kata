import { Item, Offer } from "../types";

type MockData = {
	items: Item[];
};

const items: Item[] = [
	{
		id: "apple",
		name: "Apple",
		unitPrice: 30,
		offer: {
			quantity: 2,
			price: 45,
		},
	},
	{
		id: "banana",
		name: "Banana",
		unitPrice: 50,
	},
	{
		id: "peach",
		name: "Peach",
		unitPrice: 60,
	},
	{
		id: "kiwi",
		name: "Kiwi",
		unitPrice: 20,
	},
];

export const MockData: MockData = {
	items,
};
