import { Item } from '../types';
import { MockData } from './mockData';

export const ItemsRepository = {
	getItems: (): Item[] => {
		return MockData.items;
	},
};