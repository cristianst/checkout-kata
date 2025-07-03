import { useState } from "react";
import { CheckoutAPI } from "../clientAPI";

export const useCheckout = () => {
	// use types here
	const [basket, setBasket] = useState<any[]>([]);
	const [total, setTotal] = useState(0);

	const addItem = (item: any) => {
		setBasket((prev) => [...prev, item]);
	};

	const removeItem = (index: number) => {
		setBasket((prev) => prev.filter((_, i) => i !== index));
	};

	const clearBasket = () => {
		setBasket([]);
	};

	const calculateTotal = async () => {
		const result = await CheckoutAPI.calculateTotal(basket);
		setTotal(result.total);
	};

	return { basket, total, addItem, removeItem, clearBasket, calculateTotal };
};
