import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { ProductCard } from '../ProductCard';
import { CartProvider } from '../../../contexts/CartContext';
import { NotificationProvider } from '../../../contexts/NotificationContext';
import { describe, expect, it } from 'vitest';
import React from 'react';

const mockProduct: any = {
  id: 1,
  sku: 'test-sku',
  title: 'Test Product',
  description: 'Test description',
  availabilityStatus: 'In Stock',
  category: 'vegetables',
  price: 10.99,
  discountPercentage: 0,
  rating: 4.5,
  stock: 10,
  tags: ['fresh'],
  brand: 'test',
  weight: 1.5,
  dimensions: { width: 10, height: 10, depth: 10 },
  warrantyInformation: '',
  shippingInformation: '',
  returnPolicy: '',
  minimumOrderQuantity: 1,
  meta: {
    createdAt: '',
    updatedAt: '',
    barcode: '',
    qrCode: ''
  },
  images: [],
  thumbnail: 'test-image.jpg',
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