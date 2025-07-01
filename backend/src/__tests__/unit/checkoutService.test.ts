import { CheckoutService } from "../../services/CheckoutService";

describe("Checkout Service", () => {
	describe("getItems", () => {
		/**
		 * In a real world situation we would mock here the call to the repository
		 * and test multiple scenarios like:
		 * - when the repository returns an error
		 * - when the repository returns no items, etc..
		 */
		it("should return items", () => {
			const items = CheckoutService.getItems();
			expect(items).toBeDefined();
			expect(Array.isArray(items)).toBe(true);
			expect(items.length).toBeGreaterThan(0);
		});

		it("should return items with correct structure", () => {
			const items = CheckoutService.getItems();
			const firstItem = items[0];

			expect(firstItem).toHaveProperty("id");
			expect(firstItem).toHaveProperty("name");
			expect(firstItem).toHaveProperty("unitPrice");
			expect(typeof firstItem.unitPrice).toBe("number");
		});
	});

	describe("calculateTotal", () => {
		describe("items without offers", () => {
			it("should return the total price of the items", () => {
				const total = CheckoutService.calculateTotal([]);
				expect(total).toBe(0);
			});
		});
	});
});
