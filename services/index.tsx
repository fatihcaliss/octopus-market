// import queryMaker from '@/utils/queryMaker';
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
