import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { RouteComponentProps, useHistory } from "react-router-dom";
import "./PageStyles/ProductDescription.css";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { describeProduct } from "../actions/productActions";
import { Product } from "../types";
import { addToCart } from "../actions/cartAction";

interface MathcParams {
  type: string;
  id: string;
}
interface Props extends RouteComponentProps<MathcParams> {}

const ProductDescription: React.FC<Props> = ({ match }) => {
  const productDescription = useSelector(
    (state: RootState) => state.productDescription
  );
  const { product, loading, error } = productDescription;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(describeProduct(match.params.id));
    return () => {};
  }, [dispatch, match.params.id]);

  return (
    <>
      {product === undefined && loading ? (
        <div>Loading...</div>
      ) : error === "yes" ? (
        <div>Oops... Error</div>
      ) : (
        <div className="product-desc">
          <Header />
          <div className="product-desc-container">
            <BackButton category={match.params.type} />
            <div className="product-description-part">
              <ImageDescription
                bigImage={product!.imagePath}
                relatedImages={product!.relatedImage}
              />
              <TextDescription
                product={product!}
                name={product!.productName}
                description={product!.description}
                price={product!.price}
              />
            </div>
            <Recommendation />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

interface BackProps {
  category: string;
}
const BackButton: React.FC<BackProps> = ({ category }) => {
  const history = useHistory();

  function handleClick() {
    // history.push(`/products/${category}`);
    history.goBack();
  }
  return (
    <div className="back-button">
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        type="button"
        onClick={handleClick}
      >
        <FaArrowLeft className="back-icon"></FaArrowLeft>
        <span className="back-text">Back</span>
      </button>
    </div>
  );
};

interface ImageDescriptionProps {
  bigImage: string;
  relatedImages: string[];
}
const ImageDescription: React.FC<ImageDescriptionProps> = ({
  bigImage,
  relatedImages,
}) => {
  return (
    <div className="image-desc col-md-7">
      <div className="big-image">
        <img src={bigImage} alt="Error" />
      </div>
      <div className="next-images">
        {relatedImages.map((image, id) => {
          return <img key={id} src={image} alt="Error" />;
        })}
      </div>
    </div>
  );
};

interface TextProps {
  product: Product;
  name: string;
  description: string;
  price: number;
}
const TextDescription: React.FC<TextProps> = ({
  product,
  name,
  description,
  price,
}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  function handleClick() {
    if (quantity >= 1) dispatch(addToCart(product, quantity));
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let qua = Number(e.target.value);
    let input = document.getElementById("quantity-product") as HTMLInputElement;

    if (qua < 1) {
      input.value = "";
    }
    setQuantity(qua);
  }

  return (
    <div className="text-description col-md-5">
      <h4>{name}</h4>
      <div className="cost">${price}</div>
      <div className="quantity">
        <div>Quantity</div>
        <input
          id="quantity-product"
          type="number"
          name="cost"
          min="0"
          defaultValue={quantity}
          onChange={handleChange}
        />
      </div>
      <input
        type="button"
        style={{ cursor: "pointer" }}
        value="ADD TO CART"
        onClick={handleClick}
      />
      <p>{description}</p>
      <div className="share">
        Share:
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          | Instagram
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          | Twitter
        </a>
      </div>
    </div>
  );
};

const Recommendation = () => {
  return (
    <div className="recommendation">
      <div className="text">Recommendation</div>
      <div className="recommended-products">
        <img src="" alt="Error" />
      </div>
    </div>
  );
};

export default ProductDescription;
