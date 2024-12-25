import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import NavBar from '../NavBar';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Navbar Component', () => {
	const mockCurrentPage = 'HOME';
	const mockSetCurrentPage = vi.fn();
	const mockCartItems = [{ id: 1, amount: 4 }];
	const mockSetCurrentItem = vi.fn();
	const mockSetCurrentInput = vi.fn();
	const mockWobble = 1;
	const mockSetWobble = vi.fn();

	const MockNavBar = () => {
		return (
			<BrowserRouter>
				<NavBar
					currentPage={mockCurrentPage}
					setCurrentPage={mockSetCurrentPage}
					cartItems={mockCartItems}
					setCurrentInput={mockSetCurrentInput}
					setCurrentItem={mockSetCurrentItem}
					wobble={mockWobble}
					setWobble={mockSetWobble}
				/>
			</BrowserRouter>
		);
	};

	test('should render buttons', () => {
		render(<MockNavBar />);

		const homeElement = screen.getByRole('button', {
			name: 'Go to home page',
		});
		expect(homeElement).toBeInTheDocument();

		const shopElement = screen.getByRole('button', {
			name: 'Go to shop page',
		});
		expect(shopElement).toBeInTheDocument();

		const checkoutElement = screen.getByRole('button', {
			name: 'Go to checkout page',
		});
		expect(checkoutElement).toBeInTheDocument();
	});
	test('should render correct amount of cart items', () => {
		render(<MockNavBar />);

		const checkoutElement = screen.getByRole('button', {
			name: 'Go to checkout page',
		});

		expect(checkoutElement).toHaveTextContent(
			`CART (${mockCartItems.length})`,
		);
	});
	test('should handle click functions', async () => {
		const user = userEvent.setup();
		render(<MockNavBar />);

		const homeElement = screen.getByRole('button', {
			name: 'Go to home page',
		});
		expect(homeElement).toBeInTheDocument();

		const shopElement = screen.getByRole('button', {
			name: 'Go to shop page',
		});
		expect(shopElement).toBeInTheDocument();

		const checkoutElement = screen.getByRole('button', {
			name: 'Go to checkout page',
		});
		expect(checkoutElement).toBeInTheDocument();

		await user.click(homeElement);
		expect(mockSetCurrentPage).toHaveBeenCalledTimes(1);

		await user.click(shopElement);
		expect(mockSetCurrentPage).toHaveBeenCalledTimes(2);

		await user.click(checkoutElement);
		expect(mockSetCurrentPage).toHaveBeenCalledTimes(3);
	});
});
