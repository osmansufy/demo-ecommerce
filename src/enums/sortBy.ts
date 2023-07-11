export enum SortBy {
  Price = "price",
  Rating = "rating",
  Title = "title",
  Default = "default",
}

export const sortOptions = [
  {
    name: "Default",
    value: SortBy.Default,
  },
  {
    name: "Price",
    value: SortBy.Price,
  },
  {
    name: "Rating",
    value: SortBy.Rating,
  },
  {
    name: "Title",
    value: SortBy.Title,
  },
];
