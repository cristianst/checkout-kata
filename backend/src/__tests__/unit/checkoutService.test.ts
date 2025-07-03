import { MockData } from "../../data/mockData";
import { CheckoutService } from "../../services/CheckoutService";
import { Item } from "../../types";

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
		const [apple, banana, peach, kiwi] = MockData.items;

		describe("items without offers", () => {
			it("should return the total price of the items", () => {
				// 60  (unit price) + 60  (unit price)+ 20 (unit price) = 140
				const basketItems: Item[] = [peach, peach, peach, kiwi];

				const total = CheckoutService.calculateTotal(basketItems);
				expect(total).toEqual({ total: 200 });
			});
		});

		describe("items with offers", () => {
			describe("required quantity not met", () => {
				it("should return the total price of the items", () => {
					// 30  (unit price) +  100 (unit price) + 20 (unit price) = 100
					const basketItems: Item[] = [apple, banana, banana, kiwi];

					const total = CheckoutService.calculateTotal(basketItems);
					expect(total).toEqual({ total: 150 });
				});
			});

			describe("required quantity met", () => {
				describe("one offer in the basket", () => {
					it("should return the total price of the items", () => {
						// 45 (offer price) + 50 (unit price) = 95
						const basketItems: Item[] = [apple, apple, banana];

						const total =
							CheckoutService.calculateTotal(basketItems);
						expect(total).toEqual({ total: 95 });
					});

					it("should return the total price of the items (offer applied + unit price)", () => {
						// 45 (offer price) + 30 (unit price) + 50 (unit price) + 20 (unit price) = 125
						const basketItems: Item[] = [
							apple,
							apple,
							apple,
							banana,
							kiwi,
						];

						const total =
							CheckoutService.calculateTotal(basketItems);
						expect(total).toEqual({ total: 145 });
					});
				});
				describe("multiple offers in the basket", () => {
					it("should return the total price of the items", () => {
						const basketItems: Item[] = [
							apple, // 45 (offer price)
							apple,
							apple,
							apple, // 45 (offer price)
							banana,
							banana,
							banana, // 130 (offer price)
							peach, // 60 (unit price)
						];

						const total =
							CheckoutService.calculateTotal(basketItems);

						expect(total).toEqual({ total: 280 });
					});
				});
			});
		});
	});
});
