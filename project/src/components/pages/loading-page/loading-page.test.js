import { render, screen } from '@testing-library/react';
import React from 'react';
import LoadingPage from './loading-page';

describe('Component: LoadingPage', () => {
  it('should render correctly', () => {
    render(<LoadingPage />);
    expect(screen.getByText('L')).toBeInTheDocument();
    expect(screen.getByText('oading')).toBeInTheDocument();
  });
});
