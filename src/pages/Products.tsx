import React from "react";
import { RouteComponentProps } from "react-router-dom";
// import {
// GivePage,
// MailPage,
// NotePage,
// OrganizePage,
// ReadPage,
// WritePage,
// } from "./ProductPages";

interface MatchParams {
  type: string;
}
interface Props extends RouteComponentProps<MatchParams> {}

const Products: React.FC<Props> = ({ match }) => {
  let productType: string = match.params.type;
  return <div>{productType}</div>;
};

export default Products;
