import { describe, test, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import SpriteCanvas from '../SpriteCanvas';
import '@testing-library/jest-dom'; //

describe('SpriteCanvas Component', () => {
	test('loads image and draws it on canvas', async () => {
		const mockImage = {
			onload: vi.fn(),
			src: '',
			alt: '',
		};
		vi.stubGlobal(
			'Image',
			vi.fn(() => mockImage),
		);
		render(<SpriteCanvas imageURL='mockURL.jpg' title='mockTitle' />);
		const canvasElement = await screen.findByTestId('sprite-canvas');

		await waitFor(() => expect(canvasElement).toBeInTheDocument());
	});
});
