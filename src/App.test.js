import { act, fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

let positions;
let animationFrame;

beforeEach(() => {
  window.history.replaceState(null, '', '/');
  window.scrollTo = jest.fn();
  HTMLElement.prototype.scrollIntoView = jest.fn();
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
  expect(screen.getByRole('link', { name: 'racheltaskale@gmail.com' })).toHaveAttribute('href', 'mailto:racheltaskale@gmail.com');
  fireEvent.click(screen.getByRole('button', {name:'Load more'}));
  expect(screen.getByAltText('Van Gogh Inspired Hands')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', {name:'Load more'}));
  expect(screen.getByAltText('Pixel Cactus II')).toBeInTheDocument();
  expect(screen.queryByText('Coming soon.')).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'Words' })).not.toBeInTheDocument();
  expect(screen.queryByText('College post 01')).not.toBeInTheDocument();
});

test('cancels pending scroll work on unmount', () => {
  const { unmount } = render(<App />);
  fireEvent.scroll(window);
  unmount();
  expect(window.cancelAnimationFrame).toHaveBeenCalledWith(1);
});


test('flower routes share approved notes and image zoom controls', () => {
  window.history.replaceState(null, '', '/#art/green-and-magenta');
  render(<App />);
  expect(screen.getByRole('heading', {name:'Flower studies'})).toBeInTheDocument();
  expect(screen.getByText(/comfortable with gouache/)).toBeInTheDocument();
  expect(screen.getAllByRole('button', {name:/^View (Pink|Red|Green).* image$/})).toHaveLength(3);
  expect(screen.queryByText(/placeholder/i)).not.toBeInTheDocument();
});

test('hands notes skip removed artwork and unfinished pages have no prompts', () => {
  window.history.replaceState(null, '', '/#art/van-gogh-inspired-hands');
  render(<App />);
  expect(screen.getByText('This is one of the works I am most proud of.')).toBeInTheDocument();
  expect(screen.getByRole('link', {name:'Next piece Fishy Illustration'})).toBeInTheDocument();
  expect(screen.queryByText('High on Self-Esteem')).not.toBeInTheDocument();
  act(() => { window.history.replaceState(null, '', '/#art/fishy-illustration'); window.dispatchEvent(new HashChangeEvent('hashchange')); });
  expect(screen.queryByText(/placeholder|Your thoughts can go here/)).not.toBeInTheDocument();
  expect(screen.queryByRole('heading', {name:'Thought process'})).not.toBeInTheDocument();
});
