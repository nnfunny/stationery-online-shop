import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { productListReducer, productReducer } from "./reducers/productReducer";
import thunk from "redux-thunk";
import { CartReducer } from "./reducers/cartReducer";

const initialState = {};
const reducer = combineReducers({
  productList: productListReducer,
  productDescription: productReducer,
  cart: CartReducer,
});
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
export type RootState = ReturnType<typeof reducer>;
