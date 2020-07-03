import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DESCRIPTION_FAIL,
  PRODUCT_DESCRIPTION_REQUEST,
  PRODUCT_DESCRIPTION_SUCCESS,
} from "../constants/productConstants";

import {
  ProductListState,
  ProductListAction,
  ProductState,
  ProductAction,
} from "../types";

function productListReducer(
  state: ProductListState = { loading: true, products: [] },
  action: ProductListAction
): ProductListState {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productReducer(
  state: ProductState = { loading: true, error: "no" },
  action: ProductAction
): ProductState {
  switch (action.type) {
    case PRODUCT_DESCRIPTION_REQUEST:
      return { loading: true, error: "no" };
    case PRODUCT_DESCRIPTION_SUCCESS:
      return { loading: false, product: action.payload, error: "no" };
    case PRODUCT_DESCRIPTION_FAIL:
      return { loading: false, error: "yes" };
    default:
      return state;
  }
}
export { productListReducer, productReducer };
