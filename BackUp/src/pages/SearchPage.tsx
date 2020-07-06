import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import "./PageStyles/Mail.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { ProductListState } from "../types";
import { listProductsByKeyword } from "../actions/productActions";
import { Link, useParams } from "react-router-dom";

interface Params {
  keyword: string;
}
const SearchedProducts = () => {
  function replaceWithSpace(keyword: string): string {
    return keyword.split("-").join(" ");
  }
  let { keyword } = useParams<Params>();
  const productList: ProductListState = useSelector(
    (state: RootState) => state.productList
  );
  const dispatch = useDispatch();
  const { products, loading, error }: ProductListState = productList;

  useEffect(() => {
    dispatch(listProductsByKeyword(replaceWithSpace(keyword)));
  }, [dispatch, keyword]);

  return (
    <React.Fragment>
      <Header />
      <div className="mail-container" style={{ minHeight: "60vh" }}>
        {products?.length === 0 ? (
          <div>
            There are no products with keyword "{replaceWithSpace(keyword)}"
          </div>
        ) : (
          <>
            <Filter count={products === undefined ? 0 : products.length} />
            {products === undefined && loading ? (
              <div>Loading...</div>
            ) : error?.length === 0 ? (
              <div>Oops... Error</div>
            ) : (
              <div className="mail-product-list">
                {products!.map((product) => (
                  <Link
                    to={`/products/${product.category}/${product.id}`}
                    key={product.id}
                  >
                    <Card
                      key={product.id}
                      link={product.imagePath}
                      name={product.productName}
                      price={product.price}
                    />
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default SearchedProducts;
