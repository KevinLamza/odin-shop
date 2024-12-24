import { describe, test, expect, vi, beforeEach } from 'vitest';
import { screen, render } from '@testing-library/react';
import CheckoutItem from '../CheckoutItem';
import useFetchData from '../useFetchData';
import userEvent from '@testing-library/user-event';

// Mock the `useFetchData` hook
vi.mock('../useFetchData', () => ({
	// __esModule: true, // Ensure it's treated as a module
	default: vi.fn(), // Mock the default export
}));

describe('checkout item', () => {
	// Mock the `useFetchData` hook to return a controlled title and price
	useFetchData.mockReturnValue({
		title: 'Mocked Item',
		price: 100,
	});

	test('Should render correct title', () => {
		const mockItem = { id: 1, amount: 5 };
		// Create mock values for the context
		const mockCartItems = [
			{ id: 1, amount: 5 },
			{ id: 2, amount: 4 },
		];
		const setMockCartItems = vi.fn();

		// Render the component
		render(
			<CheckoutItem
				item={mockItem}
				cartItems={mockCartItems}
				setCartItems={setMockCartItems}
			/>,
		);

		// Check if the heading is in the document
		const titleElement = screen.getByText('Mocked Item');
		expect(titleElement).toBeInTheDocument();

		const amountElement = screen.getByText('5');
		expect(amountElement).toBeInTheDocument();

		const priceElement = screen.getByText('500G');
		expect(priceElement).toBeInTheDocument();
	});

	test('Should render button and handle callback', async () => {
		const mockItem = { id: 1, amount: 5 };
		// Create mock values for the context
		const mockCartItems = [
			{ id: 1, amount: 5 },
			{ id: 2, amount: 4 },
		];
		const setMockCartItems = vi.fn();

		const user = userEvent.setup();
		const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

		// Render the component
		render(
			<CheckoutItem
				item={mockItem}
				cartItems={mockCartItems}
				setCartItems={setMockCartItems}
			/>,
		);

		// Check if the heading is in the document
		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toHaveTextContent('DELETE');

		await user.click(buttonElement);
		expect(logSpy).toHaveBeenCalledWith('I was deleted');
		logSpy.mockRestore();
	});
});
