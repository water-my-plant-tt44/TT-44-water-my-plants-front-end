import { render, screen } from '@testing-library/react';
import MarketingPage from './components/MarketingPage';

test('renders learn react link', () => {
  render(<MarketingPage />);
  const linkElement = screen.getByText(/Marketing Page/i);
  expect(linkElement).toBeInTheDocument();
});
