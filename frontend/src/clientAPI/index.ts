const backendUrl = "http://localhost:3000";

const apiClient = {
	get: (url: string) => fetch(`${backendUrl}${url}`).then((r) => r.json()),
	post: (url: string, data: any) =>
		fetch(`${backendUrl}${url}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		}).then((r) => r.json()),
};

export const CheckoutAPI = {
	getItems: () => apiClient.get("/items"),
	calculateTotal: (basket: any) =>
		apiClient.post("/checkout/total", { basket }),
};
