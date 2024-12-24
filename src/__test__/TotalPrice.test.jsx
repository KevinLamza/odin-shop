import { describe, test, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import TotalPrice from '../TotalPrice';
import '@testing-library/jest-dom'; // for matchers (like toBeInTheDocument)

vi.stubGlobal('fetch', vi.fn());

describe('TotalPrice Component', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});
	test('shows loading message initially', () => {
		render(<TotalPrice ids={[1, 2, 3]} onFetchedData={vi.fn()} />);

		// Expect the loading message to be shown
		expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
	});
	test('calls onFetchedData with prices when data is fetched successfully', async () => {
		const mockOnFetchedData = vi.fn();

		fetch
			.mockResolvedValueOnce({
				ok: true,
				json: async () => ({ cost: 100 }),
			})
			.mockResolvedValueOnce({
				ok: true,
				json: async () => ({ cost: 100 }),
			})
			.mockResolvedValueOnce({
				ok: true,
				json: async () => ({ cost: 100 }),
			});

		render(
			<TotalPrice ids={[1, 2, 3]} onFetchedData={mockOnFetchedData} />,
		);

		await waitFor(() => {
			expect(mockOnFetchedData).toHaveBeenCalledWith([100, 100, 100]);
		});
	});
	test('displays error message when fetch fails', async () => {
		fetch.mockRejectedValueOnce(new Error('Failed to fetch data for ID 1'));

		render(<TotalPrice ids={[1]} onFetchedData={vi.fn()} />);

		await waitFor(() => {
			expect(
				screen.getByText(/Error: Failed to fetch data for ID 1/i),
			).toBeInTheDocument();
		});
	});
	test('calls onFetchedData only once even when IDs change', async () => {
		const mockOnFetchedData = vi.fn();

		fetch
			.mockResolvedValueOnce({
				ok: true,
				json: async () => ({ cost: 100 }),
			})
			.mockResolvedValueOnce({
				ok: true,
				json: async () => ({ cost: 100 }),
			});

		const { rerender } = render(
			<TotalPrice ids={[1, 2]} onFetchedData={mockOnFetchedData} />,
		);

		await waitFor(() => {
			expect(mockOnFetchedData).toHaveBeenCalledWith([100, 100]);
		});

		// Now change the IDs prop
		rerender(<TotalPrice ids={[3, 4]} onFetchedData={mockOnFetchedData} />);

		// Ensure it doesn't call onFetchedData again unless the IDs actually change
		await waitFor(() => {
			expect(mockOnFetchedData).toHaveBeenCalledTimes(1);
		});
	});
});
