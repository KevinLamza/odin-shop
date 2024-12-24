import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

const MockApp = () => {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
};
describe('header and paragraph', () => {
	test('Should render heading', () => {
		render(<MockApp />);
		const headerElement = screen.getByRole('heading', {
			name: 'WELCOME TO THE POKé MART',
		});
		expect(headerElement).toBeInTheDocument();
	});

	test('Should render paragraph', () => {
		render(<MockApp />);
		const paragraphElement = screen.getByText(
			'SERVING YOU WITH EVERYTHING POKéMON SINCE 2024',
		);
		expect(paragraphElement).toBeInTheDocument();
	});
});
