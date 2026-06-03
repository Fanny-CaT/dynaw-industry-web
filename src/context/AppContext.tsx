import React, { createContext, useContext, useReducer } from 'react';
import type { Product, CartItem } from '@/types';

interface AppState {
  cart: CartItem[];
  compare: string[];
  wishlist: string[];
  quickViewProduct: Product | null;
}

type Action =
  | { type: 'ADD_TO_CART'; product: Product; quantity?: number }
  | { type: 'REMOVE_FROM_CART'; productId: string }
  | { type: 'UPDATE_CART_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_COMPARE'; productId: string }
  | { type: 'CLEAR_COMPARE' }
  | { type: 'TOGGLE_WISHLIST'; productId: string }
  | { type: 'SET_QUICK_VIEW'; product: Product | null };

const initialState: AppState = {
  cart: [],
  compare: [],
  wishlist: [],
  quickViewProduct: null,
};

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.cart.find(item => item.product.id === action.product.id);
      if (existing) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + (action.quantity || 1) }
              : item
          ),
        };
      }
      return { ...state, cart: [...state.cart, { product: action.product, quantity: action.quantity || 1 }] };
    }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.product.id !== action.productId) };
    case 'UPDATE_CART_QUANTITY':
      if (action.quantity <= 0) {
        return { ...state, cart: state.cart.filter(item => item.product.id !== action.productId) };
      }
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.productId ? { ...item, quantity: action.quantity } : item
        ),
      };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'TOGGLE_COMPARE': {
      const exists = state.compare.includes(action.productId);
      return {
        ...state,
        compare: exists ? state.compare.filter(id => id !== action.productId) : [...state.compare, action.productId],
      };
    }
    case 'CLEAR_COMPARE':
      return { ...state, compare: [] };
    case 'TOGGLE_WISHLIST': {
      const exists = state.wishlist.includes(action.productId);
      return {
        ...state,
        wishlist: exists ? state.wishlist.filter(id => id !== action.productId) : [...state.wishlist, action.productId],
      };
    }
    case 'SET_QUICK_VIEW':
      return { ...state, quickViewProduct: action.product };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
