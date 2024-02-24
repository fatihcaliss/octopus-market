// import queryMaker from '@/utils/queryMaker';
import axios from "axios";

// Function to fetch all categories
export const fetchAllCategories = async () => {
  const response = await axios.get("https://dummyjson.com/products/categories");
  return response.data;
};
