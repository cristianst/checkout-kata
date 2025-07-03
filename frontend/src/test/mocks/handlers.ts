import { http, HttpResponse } from "msw";

const backendUrl = "http://localhost:3000";

export const handlers = [
	// GET /items
	http.get(`${backendUrl}/items`, () => {
		return HttpResponse.json([
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
	}),

	// POST /checkout/total
	http.post(`${backendUrl}/checkout/total`, async ({ request }) => {
		const { items } = (await request.json()) as { items: any[] };

		// Simple mock calculation
		const total = items.reduce((sum, item) => sum + item.unitPrice, 0);

		return HttpResponse.json({ total });
	}),
];
