import url from "./URL";
export default async () => {
  const res = await fetch(`${url}/products`).catch((error) =>
    console.error(error)
  );

  const products = await res.json();

  if (products.error) {
      return null
  }
  return products
};
