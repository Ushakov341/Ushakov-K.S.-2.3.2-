import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { ProductCard } from '../ProductCard';
import { CartProvider } from '../../../contexts/CartContext';
import { NotificationProvider } from '../../../contexts/NotificationContext';
import { describe, expect, it } from 'vitest';
import React from 'react';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  price: 10.99,
  thumbnail: 'test-image.jpg',
  description: 'Test description',
  stock: 10,
  weight: 1.5
};

const renderWithProviders = (component: React.ReactNode) => {
  return render(
    <MantineProvider>
      <NotificationProvider>
        <CartProvider>
          {component}
        </CartProvider>
      </NotificationProvider>
    </MantineProvider>
  );
};

describe('ProductCard', () => {
  it('renders product information', () => {
    renderWithProviders(
      <ProductCard product={mockProduct} />
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText(/\$10\.99/)).toBeInTheDocument();
  });
});