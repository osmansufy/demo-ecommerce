import { SortBy } from "@/enums/sortBy";
import { IProduct } from "@/types/products";

export const sortProducts = (products: IProduct[], sortBy: SortBy) => {
  if (sortBy === SortBy.Price) {
    return products.sort((a, b) => a.price - b.price);
  } else if (sortBy === SortBy.Rating) {
    return products.sort((a, b) => b.rating.rate - a.rating.rate);
  } else if (sortBy === SortBy.Title) {
    return products.sort((a, b) => a.title.localeCompare(b.title));
  }
  return products;
};
