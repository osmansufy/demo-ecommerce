This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash

yarn dev
# or

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

page: index.tsx

```tsx

Home page of the project

Home page is same as shop page

```

page: shop.tsx

```tsx

Shop page of the project

all products are listed here


user can filter products by category

& sort products by price,title and rating


User can add products to cart

& increments and decrements the quantity of the product in the cart (with the help of Redux)

```

page: categories/[category].tsx

```tsx

category page of the project

dynamic category page

page is generated dynamically based on the category name in the url (with the help of getStaticPaths & getStaticProps)

products are filtered by category here



```

page: products/[id].tsx

```tsx

product page of the project

dynamic product page

product details are listed here with SSG

user can add product to cart from here (with the help of Redux)

```

page: cart.tsx

```tsx

cart page of the project

cart items are listed here .

user can increments & decrements the quantity of product  & remove the product in the cart (with the help of Redux)

```

```
State Management: Redux

```

Cart Reducer: cartSlice.ts

```

cart reducer is used to manage cart items

```

Styling: Tailwind CSS

```

tailwind css is used for styling

```
