import { useState } from "react";
import useGetProducts from "@/hooks/useGetProducts";
import { ProductCard } from "../ProductCard/ProductCard";
import useGetCategoryProducts from "@/hooks/useGetCategoryProduct";

interface IProductsContainerProps {
  filterParams: Record<string, string>;
  filterCategory: Record<string, string>;
}

export const ProductsContainer = ({
  filterParams,
  filterCategory,
}: IProductsContainerProps) => {
  const [page, setPage] = useState(1);
  const { productsData, isFetching } = useGetProducts({
    pagination: { limit: 9, skip: (page - 1) * 9 },
    q: filterParams.q,
    enabled: !filterCategory?.category,
  });

  const { categorizedProducts, isLoading } = useGetCategoryProducts(
    filterCategory?.category
  );

  const total: number = filterCategory?.category
    ? categorizedProducts?.total || 0
    : productsData?.total || 0;
  const totalPages = Math.ceil(total / 9);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div>
      {isFetching && <div>Loading...</div>}
      {filterCategory?.category
        ? categorizedProducts && (
            <div>
              <div className="mb-4">
                Total Products: {categorizedProducts.total}
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4 flex-wrap">
                {categorizedProducts.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="mt-10 mb-20 flex justify-center">
                <button
                  className="bg-gray-200 px-4 py-2 mr-2 rounded-lg"
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                >
                  Prev
                </button>
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    className={`px-4 py-2 mx-2 rounded-lg ${
                      page === pageNumber
                        ? "bg-[#00B500] text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                ))}
                <button
                  className="bg-gray-200 px-4 py-2 ml-2 rounded-lg"
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          )
        : productsData && (
            <div>
              <div className="mb-4">Total Products: {productsData.total}</div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4 flex-wrap">
                {productsData.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="mt-10 mb-20 flex justify-center">
                <button
                  className="bg-gray-200 px-4 py-2 mr-2 rounded-lg hover:bg-gray-400"
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                >
                  Prev
                </button>
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    className={`px-4 py-2 mx-2 rounded-lg hover:bg-gray-400 ${
                      page === pageNumber
                        ? "bg-[#00B500] text-white hover:bg-[#45b500]"
                        : "bg-gray-200"
                    }`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                ))}
                <button
                  className="bg-gray-200 px-4 py-2 ml-2 rounded-lg hover:bg-gray-400"
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          )}
    </div>
  );
};
