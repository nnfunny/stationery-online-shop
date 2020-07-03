import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DESCRIPTION_REQUEST,
  PRODUCT_DESCRIPTION_FAIL,
  PRODUCT_DESCRIPTION_SUCCESS,
} from "../constants/productConstants";
import Axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";
import {
  ProductListAction,
  Product,
  ProductAction,
  ProductDescription,
} from "../types";

type ProductListDispatch = ThunkDispatch<RootState, {}, ProductListAction>;
const listProducts = (category: string) => async (
  dispatch: ProductListDispatch
) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST, payload: [] });
    const reponse = await Axios.get(`/api/product/${category}`);
    const data: Product[] = reponse.data;
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: [] });
  }
};

type ProductDispatch = ThunkDispatch<RootState, {}, ProductAction>;
const describeProduct = (productId: string) => async (
  dispatch: ProductDispatch
) => {
  try {
    dispatch({ type: PRODUCT_DESCRIPTION_REQUEST });
    const requestOne = Axios.get(`/api/product/find?Id=${productId}`);
    const requestTwo = Axios.get(`/api/product/group/${productId}`);
    const response = await Axios.all([requestOne, requestTwo]).then(
      Axios.spread((...responses) => {
        const data: ProductDescription = {
          ...responses[0].data[0],
          relatedImage: responses[1].data,
        };
        dispatch({ type: PRODUCT_DESCRIPTION_SUCCESS, payload: data });
      })
    );
  } catch (error) {
    dispatch({ type: PRODUCT_DESCRIPTION_FAIL });
  }
};
export { listProducts, describeProduct };
