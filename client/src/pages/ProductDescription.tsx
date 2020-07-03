import React, { useLayoutEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, RouteComponentProps, useHistory } from "react-router-dom";
import "./PageStyles/ProductDescription.css";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { describeProduct } from "../actions/productActions";

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

  useLayoutEffect(() => {
    dispatch(describeProduct(match.params.id));
    return () => {};
  }, []);

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
  name: string;
  description: string;
  price: number;
}
const TextDescription: React.FC<TextProps> = ({ name, description, price }) => {
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
          defaultValue="1"
        />
      </div>
      <input type="button" value="ADD TO CART" />
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
