import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import Checkout from '../Checkout';
import * as reactRouterDom from 'react-router-dom';

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
});
