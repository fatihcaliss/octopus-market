import { fetchProducts } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { IProductsResponse } from "@/models/product.model";

interface IFilterParams {
  q?: string;
  pagination: {
    limit: number;
    skip: number;
  };
  enabled: boolean;
}

const useGetProducts = (filterParams: IFilterParams) => {
  const {
    data: productsData,
    error,
    isFetching,
  } = useQuery<IProductsResponse>({
    queryKey: ["getProducts", filterParams],
    queryFn: () => fetchProducts(filterParams),
    // enabled: !!productId,
  });

  return { productsData, error, isFetching };
};

export default useGetProducts;
