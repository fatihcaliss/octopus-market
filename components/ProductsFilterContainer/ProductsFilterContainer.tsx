import { Dispatch, SetStateAction, useState } from "react";
import useGetAllCategories from "@/hooks/useGetAllCategories";

interface IProductsFilterContainerProps {
  setFilterParams: Dispatch<SetStateAction<object>>;
}

export const ProductsFilterContainer = ({
  setFilterParams,
}: IProductsFilterContainerProps) => {
  const { categories, isFetching } = useGetAllCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory((prevSelectedCategory) =>
      prevSelectedCategory === categoryName ? null : categoryName
    );
  };

  const handleFilter = () => {
    setFilterParams((prevParams) => ({
      ...prevParams,
      category: selectedCategory,
    }));
  };

  const handleClear = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="px-20">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-gray-800"
          placeholder="Quick Search"
          required
        />
      </div>

      <h2 className="mt-4 mb-2 text-lg font-semibold">Category</h2>
      {isFetching ? (
        <p>Loading categories...</p>
      ) : (
        <div className="space-y-2">
          {categories?.map((category) => (
            <label key={category} className="flex items-center text-xs">
              <input
                type="radio"
                className="mr-2"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
              />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}
        </div>
      )}
      <button
        className="mt-6 px-4 py-2 bg-[#1E293B] text-white rounded-md hover:bg-[#334563] focus:outline-none focus:ring-2 focus:bg-[#334563] disabled:bg-blue-300"
        onClick={handleFilter}
        disabled={selectedCategory === null}
      >
        Filter
      </button>
      <div className="">
        {selectedCategory && (
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={handleClear}
          >
            Clear Category
          </button>
        )}
      </div>
    </div>
  );
};
