import queryMaker from "@/utils/queryMaker";
import axios from "axios";

// Function to fetch all categories
export const fetchAllCategories = async () => {
  const response = await axios.get("https://dummyjson.com/products/categories");
  return response.data;
};

// Function to fetch products
export const fetchProducts = async (filterParams: {
  q?: string;
  pagination: {
    limit: number;
    skip: number;
  };
}) => {
  const response = await axios.get(
    `https://dummyjson.com/products` + queryMaker(filterParams)
  );
  return response.data;
};

// Function to fetch specific category by Name
export const fetchProductsByCategoryName = async (categoryName: string) => {
  const response = await axios.get(
    `https://dummyjson.com/products/category/${categoryName}`
  );
  return response.data;
};

// Function to fetch specific product by ID
export const fetchProductById = async (productId: string) => {
  const response = await axios.get(
    `https://dummyjson.com/products/${productId}`
  );
  return response.data;
};

// Function to fetch specific product by ID
export const fetchProductCommentsById = async (productId: string) => {
  const response = await axios.get(
    `https://dummyjson.com/comments/${productId}`
  );
  return response.data;
};

//Funtction to update Cart
export const patchUserCart = async (productId?: string) => {
  const payload = {
    merge: true,
    products: [
      {
        id: productId,
        quantity: 1,
      },
    ],
  };
  const response = await axios.put(`https://dummyjson.com/carts/1`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
