import { Item, Offer } from '../types';

type MockData = {
	items: Item[];
	offers?: Offer[];
};

export const MockData: MockData = {
	items: [
		{
			id: 'apple',
			name: 'Apple',
			unitPrice: 30,
		},
	],
};