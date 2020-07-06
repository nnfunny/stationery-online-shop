import { ProductInCart, CartAction } from "../types";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";
import { Product } from "../types";
import { ADD_CART, REMOVE_CART } from "../constants/cartConstants";

type CartDispatch = ThunkDispatch<RootState, {}, CartAction>;
const addToCart = (product: Product, quantity: number) => (
  dispatch: CartDispatch
) => {
  const data: ProductInCart = { ...product, quantity: quantity };
  dispatch({
    type: ADD_CART,
    payload: data,
  });
};

const removeCart = (product: ProductInCart) => (dispatch: CartDispatch) => {
  dispatch({ type: REMOVE_CART, payload: product });
};

export { addToCart, removeCart };
