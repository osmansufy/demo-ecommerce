export const getProductsByCategory = async (category: string) => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};
