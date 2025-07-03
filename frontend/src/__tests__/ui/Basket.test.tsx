import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { Basket } from "../../ui/Basket";

describe("Basket Component", () => {
	it("should display empty state when basket is empty", () => {
		render(<Basket basket={[]} onRemoveItem={vi.fn()} total={0} />);
		expect(screen.getByText("No items in basket")).toBeInTheDocument();
	});

	it("should display basket items with remove buttons", () => {
		const mockBasket = [
			{ id: "1", name: "Apple", unitPrice: 30, basketItemId: "1-123" },
		];
		render(
			<Basket basket={mockBasket} onRemoveItem={vi.fn()} total={30} />
		);
		expect(screen.getByText("Apple - Price: 30")).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: "Remove" })
		).toBeInTheDocument();
	});

	it("should call onRemoveItem when remove button is clicked", async () => {
		const user = userEvent.setup();
		const mockRemoveItem = vi.fn();
		const mockBasket = [
			{ id: "1", name: "Apple", unitPrice: 30, basketItemId: "1-123" },
		];
		render(
			<Basket
				basket={mockBasket}
				onRemoveItem={mockRemoveItem}
				total={30}
			/>
		);

		await user.click(screen.getByRole("button", { name: "Remove" }));
		expect(mockRemoveItem).toHaveBeenCalledWith("1-123");
	});
});
