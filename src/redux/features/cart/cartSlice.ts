import { IProduct } from "./../../../types/products";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ICart {
  items: IProduct[];
  totalAmount: number;
}

const initialState: ICart = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProduct>) {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity!++;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeSingleItemFromCart(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const existingProduct = state.items.find((item) => item.id === productId);
      if (existingProduct) {
        existingProduct.quantity!--;
        if (existingProduct.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== productId);
        }
      }
    },

    removeFromCart(state, action: PayloadAction<number>) {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
