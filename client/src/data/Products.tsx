import products from "./json/product.json";
import groups from "./json/group.json";

let convertedProductData = products.map(
  ({
    id,
    productName,
    category,
    imagePath,
    price,
    description,
    imageGroupId,
    options,
  }) => {
    return {
      id: Number(id),
      productName: productName,
      category: category,
      imagePath: imagePath,
      price: Number(price),
      description: description,
      imageGroupId: Number(imageGroupId),
      options: Number(options),
    };
  }
);

let convertGroupData = groups.map(({ id, imagePath }) => {
  return {
    id: Number(id),
    imagePath: imagePath,
  };
});
export const GetAll = () => convertedProductData;
export const GetProductByCategory = (category: string) => {
  return convertedProductData.filter(
    (product) => product.category === category
  );
};
export const GetProductById = (id: number) => {
  return convertedProductData.find((product) => product.id === id);
};
export const GetGroupImages = (id: number) => {
  let relatedImages: string[] = [];
  for (let i = 0; i < convertGroupData!.length; i++) {
    if (convertGroupData[i].id === id) {
      relatedImages.push(convertGroupData[i].imagePath);
    }
  }
  return relatedImages;
};
export const GetProductByKeyword = (keyword: string) => {
  let rgx = new RegExp(keyword, "gi");
  return convertedProductData.filter((product) => {
    return (
      rgx.test(product.productName) ||
      rgx.test(product.category) ||
      rgx.test(product.description)
    );
  });
};
