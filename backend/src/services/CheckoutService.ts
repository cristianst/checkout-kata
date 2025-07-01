import { ItemsRepository } from '../data/ItemsRepository';
import { Item, Offer } from '../types';

export const CheckoutService = {
	getItems: (): Item[] => ItemsRepository.getItems(),

	calculateTotal: (selectedItems: Item[]): number => {
		return 0
	},
};