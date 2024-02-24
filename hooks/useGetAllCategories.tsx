import { fetchAllCategories } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetAllCategories = () => {
  const {
    data: categories,
    error,
    isLoading,
    isFetching,
  } = useQuery<string[]>({
    queryKey: ["getAllCategories"],
    queryFn: fetchAllCategories,
    // initialData: initialCategoriesData,
    placeholderData: [],
  });

  return { categories, error, isLoading, isFetching };
};

export default useGetAllCategories;
