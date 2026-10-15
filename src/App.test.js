import { act, fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

let positions;
let animationFrame;

beforeEach(() => {
  positions = { middesk: 100, runway: 1000, broadridge: 2000 };
  jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function () {
    return { top: positions[this.id] ?? 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
  });
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => {
    animationFrame = callback;
    return 1;
  });
  jest.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => {});
});

afterEach(() => jest.restoreAllMocks());

test('project navigation follows scrolling in both directions', () => {
  render(<App />);
  const nav = within(screen.getByRole('navigation', { name: 'Engineering projects' }));
  const middesk = nav.getByRole('link', { name: /Middesk/ });
  const runway = nav.getByRole('link', { name: /Runway/ });
  const broadridge = nav.getByRole('link', { name: /Broadridge/ });
  expect(middesk).toHaveAttribute('aria-current', 'location');
  expect(runway).toHaveAttribute('href', '#runway');

  positions = { middesk: -1000, runway: 100, broadridge: 1000 };
  fireEvent.scroll(window);
  act(() => animationFrame());
  expect(runway).toHaveAttribute('aria-current', 'location');
  expect(middesk).not.toHaveAttribute('aria-current');

  positions = { middesk: -2000, runway: -1000, broadridge: 100 };
  fireEvent.scroll(window);
  act(() => animationFrame());
  expect(broadridge).toHaveAttribute('aria-current', 'location');

  positions = { middesk: 100, runway: 1000, broadridge: 2000 };
  fireEvent.scroll(window);
  act(() => animationFrame());
  expect(middesk).toHaveAttribute('aria-current', 'location');
});

test('connects the real contact address and preserves creative work', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'Email ↗' })).toHaveAttribute('href', 'mailto:racheltaskale@gmail.com');
  expect(screen.getByAltText('Van Gogh Inspired Hands')).toBeInTheDocument();
  expect(screen.getByAltText('Pixel Cactus II')).toBeInTheDocument();
  expect(screen.getByText('Coming soon.')).toBeInTheDocument();
  expect(screen.queryByText('College post 01')).not.toBeInTheDocument();
});

test('cancels pending scroll work on unmount', () => {
  const { unmount } = render(<App />);
  fireEvent.scroll(window);
  unmount();
  expect(window.cancelAnimationFrame).toHaveBeenCalledWith(1);
});
