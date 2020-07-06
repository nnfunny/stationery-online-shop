import { RouteComponentProps } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import Card from "../components/Card";
import HeaderProduct from "../components/HeaderProduct";
import Filter from "../components/Filter";
import "./PageStyles/Mail.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { ProductListState } from "../types";
import { listProducts } from "../actions/productActions";
import { Link } from "react-router-dom";

interface MatchParams {
  type: string;
}
interface Props extends RouteComponentProps<MatchParams> {}

const Products: React.FC<Props> = ({ match }) => {
  let category: string = match.params.type;
  const header = `/images/Category/${category}.jpg`;
  const productList: ProductListState = useSelector(
    (state: RootState) => state.productList
  );
  const dispatch = useDispatch();
  const { products, loading, error }: ProductListState = productList;

  useEffect(() => {
    dispatch(listProducts(category));
    return () => {};
  }, [dispatch, category]);

  return (
    <React.Fragment>
      <Header />
      <div className="mail-container">
        <HeaderProduct name={"Mail"} link={header} />
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
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Products;
