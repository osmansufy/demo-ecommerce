export const getCategories = async (): Promise<string[] | undefined> => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.log(error);
  }
};
