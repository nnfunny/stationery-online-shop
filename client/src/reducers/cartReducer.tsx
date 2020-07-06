import { CartState, CartAction, ProductInCart } from "../types";
import { ADD_CART, REMOVE_CART } from "../constants/cartConstants";

function CartReducer(
  state: CartState = { cartItems: [], total: 0, quantity: 0 },
  action: CartAction
) {
  switch (action.type) {
    case ADD_CART:
      const item: ProductInCart = action.payload;
      const cartItems: ProductInCart[] = [...state.cartItems, item];
      const quantity: number = state.quantity + item.quantity;
      const total: number = cartItems.reduce((sum, currentValue) => {
        return sum + currentValue.price * currentValue.quantity;
      }, 0);
      return {
        cartItems: cartItems,
        quantity: quantity,
        total: total,
      };
    case REMOVE_CART:
      const itemRemoved: ProductInCart = action.payload;
      const cartItemsRemoved: ProductInCart[] = state.cartItems.filter(
        (x) => x !== itemRemoved
      );
      const quantityRemoved: number = state.quantity - itemRemoved.quantity;
      const totalRemoved: number =
        state.total - itemRemoved.price * itemRemoved.quantity;
      return {
        cartItems: cartItemsRemoved,
        quantity: quantityRemoved < 0 ? 0 : quantityRemoved,
        total: totalRemoved < 0 ? 0 : totalRemoved,
      };
    default:
      return state;
  }
}

export { CartReducer };
