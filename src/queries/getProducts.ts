import { IProduct } from "@/types/products";

export const getProducts = async (
  limit?: number
): Promise<IProduct[] | undefined> => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products?limit=${limit}`
    );
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};
