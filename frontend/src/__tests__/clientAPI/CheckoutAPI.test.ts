import { CheckoutAPI } from "../../clientAPI";

describe("CheckoutAPI", () => {
	it("should fetch items from backend", async () => {
		const result = await CheckoutAPI.getItems();

		expect(result).toEqual([
			{
				id: "apple",
				name: "Apple",
				unitPrice: 30,
				offer: { quantity: 2, price: 45 },
			},
			{
				id: "banana",
				name: "Banana",
				unitPrice: 50,
				offer: { quantity: 3, price: 130 },
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
		]);
	});

	it("should calculate total for basket", async () => {
		const mockBasket = [{ id: "1", name: "Apple", unitPrice: 30 }];

		const result = await CheckoutAPI.calculateTotal(mockBasket);
		expect(result).toEqual({ total: 30 });
	});
});
