import { useState } from 'react'
import { Product } from '@/hooks/products'
import useLocalStorageState from 'use-local-storage-state'

export interface CartItem {
  product: Product,
  quantity: number
}

export interface CartProps {
  [productId: string]: CartItem
}

export const useCart = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>("Cart", {});
  const [isCartToggled, setCartToggled] = useState<boolean>(false);

  const toggleCart = () => {
    setCartToggled(!isCartToggled);
  };

  const addToCart = (product: Product) => {
    setCart((prevCart = {}) => {
      const currentQuantity = prevCart[product._id]?.quantity || 0;

      return {
	...prevCart,
	[product._id]: { product, quantity: currentQuantity + 1 },
      }
    });
  };

  const removeProduct = (productId: string) => {
    setCart((prevCart = {}) => {
      const updatedCart = { ...prevCart }
      delete updatedCart[productId]
      return updatedCart
    })
  };

  const incrementQuantity = (productId: string) => {
    setCart((prevCart = {}) => ({
      ...prevCart,
      [productId]: { ...prevCart[productId], quantity: prevCart[productId].quantity + 1 },
    }));
  };

  const decrementQuantity = (productId: string) => {
    setCart((prevCart = {}) => {
      if (prevCart[productId].quantity === 1) {
	return prevCart
      }

      return {
        ...prevCart,
        [productId]: { ...prevCart[productId], quantity: prevCart[productId].quantity - 1 },
      };
    });
  };

  const getOrderValue = () => {
    return Object.values(cart || {}).reduce((total, cartItem) => {
      return total + (cartItem.product.price * cartItem.quantity);
    }, 0);
  };

  const getTotalItemCount = () => {
    return Object.values(cart || {}).reduce((total, cartItem) => {
      return total + cartItem.quantity;
    }, 0);
  };

  const getProducts = () => Object.values(cart || {});

  return { isCartToggled, toggleCart, cart, setCart, addToCart, getProducts, removeProduct, incrementQuantity, decrementQuantity, getOrderValue, getTotalItemCount };
};
