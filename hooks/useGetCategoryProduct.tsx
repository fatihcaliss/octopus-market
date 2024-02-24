import { IProductsResponse } from "@/models/product.model";
import { fetchProductsByCategoryName } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetCategoryProducts = (categoryName: string) => {
  const {
    data: categorizedProducts,
    error,
    isLoading,
  } = useQuery<IProductsResponse>({
    queryKey: ["getCategoryProducts", categoryName],
    queryFn: () => fetchProductsByCategoryName(categoryName),
    enabled: !!categoryName,
  });

  return { categorizedProducts, error, isLoading };
};

export default useGetCategoryProducts;
