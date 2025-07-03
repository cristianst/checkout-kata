import { useEffect, useState } from "react";
import { CheckoutAPI } from "../clientAPI";

export const useCheckout = () => {
	// use types here
	const [basket, setBasket] = useState<any[]>([]);
	const [total, setTotal] = useState(0);
	const [items, setItems] = useState<any[]>([]);

	useEffect(() => {
		console.log("fetch items from backend...");
		const getItems = async () => {
			const result = await CheckoutAPI.getItems();
			setItems(result);
		};
		getItems();
	}, []);

	const addItem = (item: any) => {
		// workaround to make sure item ids are unique inside basket
		const basketItemId = `${item.id}-${Date.now()}`;
		const basketItem = { ...item, basketItemId };
		setBasket((prev) => [...prev, basketItem]);
	};

	const removeItem = (basketItemId: string) => {
		setBasket((prev) =>
			prev.filter((item) => item.basketItemId !== basketItemId)
		);
	};

	const clearBasket = () => {
		setBasket([]);
	};

	const calculateTotal = async () => {
		console.log("calculating total for basket", basket);
		const result = await CheckoutAPI.calculateTotal(basket);
		setTotal(result.total);
	};

	return {
		basket,
		total,
		addItem,
		removeItem,
		clearBasket,
		calculateTotal,
		items,
	};
};
