"use client"
import React, { createContext, useContext, ReactNode } from 'react'
import { Product } from '@/hooks/products'
import { useCart, CartProps, CartItem } from '@/hooks/cart'

interface CartContextProps {
  isCartToggled: boolean;
  toggleCart: () => void;
  cart: CartProps | undefined;
  setCart: React.Dispatch<React.SetStateAction<CartProps | undefined>>;
  addToCart: (product: Product) => void;
  handleAddToCart: (product: Product | null) => void;
  getProducts: () => CartItem[];
  removeProduct: (productId: string) => void;
  incrementQuantity: (productId: string) => void;
  decrementQuantity: (productId: string) => void;
  getOrderValue: () => number;
  getTotalItemCount: () => number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const cart = useCart();

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
