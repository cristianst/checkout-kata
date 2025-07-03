import request from "supertest";
import app from "../../index";
import { MockData } from "../../data/mockData";

describe("Routes", () => {
	describe("GET /items", () => {
		it("should return all items", async () => {
			const { items } = MockData;
			const response = await request(app.callback()).get("/items");
			expect(response.status).toBe(200);
			expect(response.body).toEqual(items);
		});
	});

	describe("POST /checkout/total", () => {
		it("should return the total price of the items", async () => {
			const [apple, banana, peach, kiwi] = MockData.items;

			const response = await request(app.callback())
				.post("/checkout/total")
				.send({
					items: [
						apple, // 45 (offer price)
						apple,
						apple,
						apple, // 45 (offer price)
						banana,
						banana,
						banana, // 130 (offer price)
						peach, // 60 (unit price)
						kiwi, // 20 (unit price)
					],
				});
			expect(response.status).toBe(200);
			expect(response.body).toEqual({ total: 300 });
		});

		it("should return total price of the items when items is empty	", async () => {
			const response = await request(app.callback())
				.post("/checkout/total")
				.send({ items: [] });
			expect(response.status).toBe(200);
			expect(response.body).toEqual({ total: 0 });
		});
	});
});
