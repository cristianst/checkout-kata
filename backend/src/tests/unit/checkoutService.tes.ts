import { MockData } from "../../data/mockData";
import { CheckoutService } from "../../services/CheckoutService";

describe('CheckoutService', () => {
	it('should return the items', () => {
		const items = CheckoutService.getItems();
		expect(items).toEqual(MockData.items);
	});
});