import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import List from '../List';
import useFetchData from '../useFetchData';
import userEvent from '@testing-library/user-event';

describe('Navbar Component', () => {
	const mockValidIds = [1, 2, 3];
	const mockHandleListClick = vi.fn();
	const mockCurrentItem = 1;

	vi.mock('../useFetchData', () => ({
		default: vi.fn(), // Mock the default export
	}));

	// const MockNavBar = () => {
	// 	return (
	// 		<BrowserRouter>
	// 			<NavBar
	// 				currentPage={mockCurrentPage}
	// 				setCurrentPage={mockSetCurrentPage}
	// 				cartItems={mockCartItems}
	// 				setCurrentInput={mockSetCurrentInput}
	// 				setCurrentItem={mockSetCurrentItem}
	// 				wobble={mockWobble}
	// 				setWobble={mockSetWobble}
	// 			/>
	// 		</BrowserRouter>
	// 	);
	// };

	test('should render three list items', () => {
		useFetchData.mockReturnValue({
			title: 'Mocked Item',
			price: 100,
		});
		render(
			<List
				validIds={mockValidIds}
				handleListClick={mockHandleListClick}
				currentItem={mockCurrentItem}
			/>,
		);
		const listElement = screen.getByRole('list');
		expect(listElement).toBeInTheDocument();

		const listItemElements = screen.getAllByRole('button', {
			name: 'Open shop page Mocked Item',
		});
		expect(listItemElements.length).toBe(3);
	});
	test('should handle click', async () => {
		const user = userEvent.setup();

		useFetchData.mockReturnValue({
			title: 'Mocked Item',
			price: 100,
		});
		render(
			<List
				validIds={mockValidIds}
				handleListClick={mockHandleListClick}
				currentItem={mockCurrentItem}
			/>,
		);
		const listElement = screen.getByRole('list');
		expect(listElement).toBeInTheDocument();

		const listItemElements = screen.getAllByRole('button', {
			name: 'Open shop page Mocked Item',
		});
		expect(listItemElements.length).toBe(3);
		console.log(listItemElements[0]);

		await user.click(listItemElements[0]);

		expect(mockHandleListClick).toHaveBeenCalledOnce();
	});
});
