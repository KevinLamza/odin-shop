import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import CheckoutItem from '../CheckoutItem';
import useFetchData from '../useFetchData';
import userEvent from '@testing-library/user-event';

vi.mock('../useFetchData', () => ({
	default: vi.fn(), // Mock the default export
}));

describe('checkout item', () => {
	useFetchData.mockReturnValue({
		title: 'Mocked Item',
		price: 100,
	});

	test('Should render correct title', () => {
		const mockItem = { id: 1, amount: 5 };
		const mockCartItems = [
			{ id: 1, amount: 5 },
			{ id: 2, amount: 4 },
		];
		const setMockCartItems = vi.fn();

		render(
			<CheckoutItem
				item={mockItem}
				cartItems={mockCartItems}
				setCartItems={setMockCartItems}
			/>,
		);

		const titleElement = screen.getByText('Mocked Item');
		expect(titleElement).toBeInTheDocument();

		const amountElement = screen.getByText('5');
		expect(amountElement).toBeInTheDocument();

		const priceElement = screen.getByText('500G');
		expect(priceElement).toBeInTheDocument();
	});

	test('Should render button and handle callback', async () => {
		const mockItem = { id: 1, amount: 5 };
		const mockCartItems = [
			{ id: 1, amount: 5 },
			{ id: 2, amount: 4 },
		];
		const setMockCartItems = vi.fn();

		const user = userEvent.setup();
		const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

		render(
			<CheckoutItem
				item={mockItem}
				cartItems={mockCartItems}
				setCartItems={setMockCartItems}
			/>,
		);

		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toHaveTextContent('DELETE');

		await user.click(buttonElement);
		expect(logSpy).toHaveBeenCalledWith('I was deleted');
		logSpy.mockRestore();
	});
});
