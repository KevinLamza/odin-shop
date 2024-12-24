import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import ItemCard from '../ItemCard';
import userEvent from '@testing-library/user-event';

describe('ItemCard Component', () => {
	test('Should render input', () => {
		const mockCurrentItem = 1;
		const mockHandleAddItemToCart = vi.fn();
		const mockCurrentInput = ''; // Initial input value
		const mockHandleInputChange = vi.fn();

		render(
			<ItemCard
				currentItem={mockCurrentItem}
				handleAddItemToCart={mockHandleAddItemToCart}
				currentInput={mockCurrentInput}
				handleInputChange={mockHandleInputChange}
			/>,
		);

		const inputElement = screen.getByTestId('inputAmount');
		expect(inputElement).toBeInTheDocument();
	});

	test('Should process input correctly', async () => {
		const user = userEvent.setup();
		const mockCurrentItem = 1;
		const mockHandleAddItemToCart = vi.fn();
		let mockCurrentInput = ''; // Start with an empty string

		const mockHandleInputChange = vi.fn((value) => {
			mockCurrentInput = value;
		});

		render(
			<ItemCard
				currentItem={mockCurrentItem}
				handleAddItemToCart={mockHandleAddItemToCart}
				currentInput={mockCurrentInput}
				handleInputChange={mockHandleInputChange}
				setWobble={vi.fn()}
			/>,
		);

		const inputElement = screen.getByTestId('inputAmount');

		await user.type(inputElement, '20');

		expect(mockHandleInputChange).toHaveBeenCalledTimes(2); // The function should be called once for each character typed
	});

	test('Should render button', () => {
		const mockCurrentItem = 1;
		const mockHandleAddItemToCart = vi.fn();
		const mockCurrentInput = ''; // Initial input value
		const mockHandleInputChange = vi.fn();

		render(
			<ItemCard
				currentItem={mockCurrentItem}
				handleAddItemToCart={mockHandleAddItemToCart}
				currentInput={mockCurrentInput}
				handleInputChange={mockHandleInputChange}
			/>,
		);

		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toBeInTheDocument();
	});

	test('Should handle button click', async () => {
		const mockCurrentItem = 1;
		const mockHandleAddItemToCart = vi.fn();
		const mockCurrentInput = ''; // Initial input value
		const mockHandleInputChange = vi.fn();
		const mockSetWobble = vi.fn();

		const user = userEvent.setup();

		render(
			<ItemCard
				currentItem={mockCurrentItem}
				handleAddItemToCart={mockHandleAddItemToCart}
				currentInput={mockCurrentInput}
				handleInputChange={mockHandleInputChange}
				setWobble={mockSetWobble}
			/>,
		);

		const buttonElement = screen.getByRole('button');

		await user.click(buttonElement);
		expect(mockHandleAddItemToCart).toHaveBeenCalledTimes(1);
	});
});
