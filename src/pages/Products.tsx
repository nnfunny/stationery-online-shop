import React, { ReactElement } from "react";
import { RouteComponentProps } from "react-router-dom";
import {
  GivePage,
  MailPage,
  NotePage,
  OrganizePage,
  ReadPage,
  WritePage,
} from "./ProductPages";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface MatchParams {
  type: string;
}
interface Props extends RouteComponentProps<MatchParams> {}

const Products: React.FC<Props> = ({ match }) => {
  let productType: string = match.params.type;
  let productTypeComponent: ReactElement = <MailPage />;
  switch (productType) {
    case "give":
      productTypeComponent = <GivePage />;
      break;
    case "mail":
      productTypeComponent = <MailPage />;
      break;
    case "notes":
      productTypeComponent = <NotePage />;
      break;
    case "write":
      productTypeComponent = <WritePage />;
      break;
    case "read":
      productTypeComponent = <ReadPage />;
      break;
    case "organize":
      productTypeComponent = <OrganizePage />;
      break;
  }
  return (
    <React.Fragment>
      <Header />
      <div>{productTypeComponent}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Products;
