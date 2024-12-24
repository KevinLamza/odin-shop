import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import Checkout from '../Checkout';
import * as reactRouterDom from 'react-router-dom';
import userEvent from '@testing-library/user-event';

// Mock `useOutletContext` at the top level
vi.mock('react-router-dom', async (importOriginal) => {
	const originalModule = await importOriginal();
	return {
		...originalModule,
		useOutletContext: vi.fn(),
	};
});

describe('checkout header, table and button', () => {
	test('Should render heading', () => {
		// Create mock values for the context
		const mockCartItems = [
			{ id: 1, amount: 5 },
			{ id: 2, amount: 4 },
		];
		const setMockCartItems = vi.fn();

		// Mock `useOutletContext` to return our mock values
		reactRouterDom.useOutletContext.mockReturnValue({
			cartItems: mockCartItems,
			setCartItems: setMockCartItems,
		});

		// Render the component
		render(<Checkout />);

		// Check if the heading is in the document
		const headerElement = screen.getByRole('heading', {
			name: 'CHECKOUT',
		});
		expect(headerElement).toBeInTheDocument();
	});
	test('Should render empty cart text', () => {
		// Create mock values for the context
		const mockCartItems = [];
		const setMockCartItems = vi.fn();

		// Mock `useOutletContext` to return our mock values
		reactRouterDom.useOutletContext.mockReturnValue({
			cartItems: mockCartItems,
			setCartItems: setMockCartItems,
		});

		// Render the component
		render(<Checkout />);

		// Check if the heading is in the document
		const emptyCartElement = screen.getByTestId('empty-cart', {
			name: 'NO ITEMS IN CART',
		});
		expect(emptyCartElement).toBeInTheDocument();
	});
	test('Should render table when one cart item', () => {
		// Create mock values for the context
		const mockCartItems = [{ id: 1, amount: 5 }];
		const setMockCartItems = vi.fn();

		// Mock `useOutletContext` to return our mock values
		reactRouterDom.useOutletContext.mockReturnValue({
			cartItems: mockCartItems,
			setCartItems: setMockCartItems,
		});

		// Render the component
		render(<Checkout />);

		// Check if the heading is in the document
		const tableElement = screen.getByRole('table');
		expect(tableElement).toBeInTheDocument();
	});
	test('Should render button when one cart item', () => {
		// Create mock values for the context
		const mockCartItems = [{ id: 1, amount: 5 }];
		const setMockCartItems = vi.fn();

		// Mock `useOutletContext` to return our mock values
		reactRouterDom.useOutletContext.mockReturnValue({
			cartItems: mockCartItems,
			setCartItems: setMockCartItems,
		});

		// Render the component
		render(<Checkout />);

		// Check if the heading is in the document
		const buttonElement = screen.getByTestId('checkout-button');
		expect(buttonElement).toBeInTheDocument();
	});
	test('Should alert when click buy button', async () => {
		// Create mock values for the context
		const mockCartItems = [{ id: 1, amount: 5 }];
		const setMockCartItems = vi.fn();
		const user = userEvent.setup();

		// Mock `useOutletContext` to return our mock values
		reactRouterDom.useOutletContext.mockReturnValue({
			cartItems: mockCartItems,
			setCartItems: setMockCartItems,
		});

		vi.stubGlobal('alert', vi.fn());

		// Render the component
		render(<Checkout />);

		// Check if the heading is in the document
		const buttonElement = screen.getByTestId('checkout-button');
		expect(buttonElement).toBeInTheDocument();

		await user.click(buttonElement);
		expect(alert).toHaveBeenCalledWith('Purchase successful!');
	});
});
