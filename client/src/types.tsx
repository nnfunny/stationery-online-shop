import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DESCRIPTION_REQUEST,
  PRODUCT_DESCRIPTION_SUCCESS,
  PRODUCT_DESCRIPTION_FAIL,
} from "./constants/productConstants";

export interface Product {
  id: number;
  productName: string;
  category: string;
  imagePath: string;
  price: number;
  description: string;
  imageGroupId: number;
  options: number;
}

// Product List Actions
export interface ProductListState {
  loading: boolean;
  products?: Product[];
  error?: Product[];
}
interface ProductListRequestAction {
  type: typeof PRODUCT_LIST_REQUEST;
  payload: Product[];
}
interface ProductListSuccessAction {
  type: typeof PRODUCT_LIST_SUCCESS;
  payload: Product[];
}
interface ProductListFailAction {
  type: typeof PRODUCT_LIST_FAIL;
  payload: Product[];
}
export type ProductListAction =
  | ProductListRequestAction
  | ProductListSuccessAction
  | ProductListFailAction;

// Product Description Actions
export interface ProductDescription extends Product {
  relatedImage: string[];
}
export interface ProductState {
  loading: boolean;
  product?: ProductDescription;
  error: string;
}
interface ProductRequestAction {
  type: typeof PRODUCT_DESCRIPTION_REQUEST;
  payload?: ProductDescription;
}
interface ProductSuccessAction {
  type: typeof PRODUCT_DESCRIPTION_SUCCESS;
  payload: ProductDescription;
}
interface ProductFailAction {
  type: typeof PRODUCT_DESCRIPTION_FAIL;
  payload?: ProductDescription;
}
export type ProductAction =
  | ProductRequestAction
  | ProductFailAction
  | ProductSuccessAction;
