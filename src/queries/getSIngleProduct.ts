import { IProduct } from "@/types/products";

export const getSingleProduct = async (
  id: string
): Promise<IProduct | undefined> => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    return product;
  } catch (error) {
    console.log(error);
  }
};
