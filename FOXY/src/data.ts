import { Product } from "./types/Product";

export const sampleProducts: Product[] = [
  {
    name: "Nike Slim Shirt",
    slug: "nike-slim-shirt",
    image: "../images/p1.jpg",
    category: "Shirts",
    brand: "Nike",
    price: 120,
    countInStock: 10,
    description: "high quality shirt",
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Adidas Slim Shirt",
    slug: "adidas-slim-shirt",
    image: "../images/p2.jpg",
    category: "Shirts",
    brand: "Adidas",
    price: 150,
    countInStock: 10,
    description: "super quality shirt",
    rating: 3.5,
    numReviews: 19,
  },
  {
    name: "Lacoste Slim Pants",
    slug: "lacoste-slim-pants",
    image: "../images/p3.jpg",
    category: "Pants",
    brand: "Lacoste",
    price: 920,
    countInStock: 10,
    description: "shirt",
    rating: 5,
    numReviews: 100,
  },
  {
    name: "Puma Slim Pants",
    slug: "puma-slim-pants",
    image: "../images/p4.jpg",
    category: "Pants",
    brand: "Puma",
    price: 520,
    countInStock: 10,
    description: "high performance shirt",
    rating: 5,
    numReviews: 10,
  }

];
