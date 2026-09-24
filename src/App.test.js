import { render, screen, act } from '@testing-library/react';
import App from './App';

describe('Portfolio App', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllTimers();
  });

  test('renders initial loading state', () => {
    render(<App />);
    const loadingElements = screen.getAllByText(/Churning|Thinking|Searching/i);
    expect(loadingElements.length).toBeGreaterThan(0);
  });

  test('transitions out of loading state after timeout', () => {
    render(<App />);
    
    // Fast-forward time to skip loading screen
    act(() => {
      jest.advanceTimersByTime(3100);
    });

    // Check if loading state is gone
    const loadingElement = screen.queryByText(/Churning/i);
    expect(loadingElement).not.toBeInTheDocument();
  });
});
