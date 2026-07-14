import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ id: 1, title: 'First post', body: 'Post body' }]),
    })
  );
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('loads and displays blog posts', async () => {
  render(<App />);
  expect(await screen.findByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'First post' })).toBeInTheDocument();
});
