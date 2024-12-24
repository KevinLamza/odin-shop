import { describe, test, expect, vi, beforeEach } from 'vitest';
import { screen, render } from '@testing-library/react';
import FetchItemBlock from '../FetchItemBlock';
import useFetchData from '../useFetchData';

// Mock the `useFetchData` hook
vi.mock('../useFetchData', () => ({
	// __esModule: true, // Ensure it's treated as a module
	default: vi.fn(), // Mock the default export
}));

describe('checkout item for loading', () => {
	beforeEach(() => {
		// Reset the mock before each test to avoid cross-test contamination
		useFetchData.mockReset();
	});

	test('Should render button and handle callback', () => {
		// Mock the `useFetchData` hook to return a controlled title and price
		useFetchData.mockReturnValue({
			loading: true,
			error: false,
			title: 'Mock Title',
			description: 'Mock Description',
			price: 100,
			imageURL: 'test url',
		});
		// Render the component
		render(<FetchItemBlock id={1} />);

		// Check if the heading is in the document
		const loadingElement = screen.getByText('Loading...');
		expect(loadingElement).toBeInTheDocument();

		// Check if the heading is in the document
		const errorElement = screen.queryByText(
			'A network error was encountered',
		);
		expect(errorElement).not.toBeInTheDocument();

		const titleElement = screen.queryByText('Mock Title');
		expect(titleElement).not.toBeInTheDocument();
	});
});

describe('checkout item for error', () => {
	beforeEach(() => {
		// Reset the mock before each test to avoid cross-test contamination
		useFetchData.mockReset();
	});

	test('Should render button and handle callback', () => {
		useFetchData.mockReturnValue({
			loading: false,
			error: true,
			title: 'Mock Title',
			description: 'Mock Description',
			price: 100,
			imageURL: 'test url',
		});
		// Render the component
		render(<FetchItemBlock id={1} />);

		// Check if the heading is in the document
		const loadingElement = screen.queryByText('Loading...');
		expect(loadingElement).not.toBeInTheDocument();

		// Check if the heading is in the document
		const errorElement = screen.getByText(
			'A network error was encountered',
		);
		expect(errorElement).toBeInTheDocument();

		const titleElement = screen.queryByText('Mock Title');
		expect(titleElement).not.toBeInTheDocument();
	});
});

describe('checkout item', () => {
	beforeEach(() => {
		// Reset the mock before each test to avoid cross-test contamination
		useFetchData.mockReset();
	});

	test('Should render button and handle callback', () => {
		useFetchData.mockReturnValue({
			loading: false,
			error: false,
			title: 'Mock Title',
			description: 'Mock Description',
			price: 100,
			imageURL: 'test url',
		});
		// Render the component
		render(<FetchItemBlock id={1} />);

		// Check if the heading is in the document
		const loadingElement = screen.queryByText('Loading...');
		expect(loadingElement).not.toBeInTheDocument();

		// Check if the heading is in the document
		const errorElement = screen.queryByText(
			'A network error was encountered',
		);
		expect(errorElement).not.toBeInTheDocument();

		const titleElement = screen.getByText('Mock Title');
		expect(titleElement).toBeInTheDocument();
	});
});
