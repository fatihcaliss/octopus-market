import { Dispatch, SetStateAction, useState } from "react";
import useGetAllCategories from "@/hooks/useGetAllCategories";
import { debounce } from "@/utils/debounce/debounce";
import useGetProducts from "@/hooks/useGetProducts";

interface IProductsFilterContainerProps {
  setFilterCategory: Dispatch<SetStateAction<object>>;
  setFilterParams: Dispatch<SetStateAction<object>>;
}

export const ProductsFilterContainer = ({
  setFilterCategory,
  setFilterParams,
}: IProductsFilterContainerProps) => {
  const { categories, isFetching } = useGetAllCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const onChange = (e: any, name: string) =>
    updateDebounceText(e.target.value, name);
  const updateDebounceText = debounce((text, name) => {
    setFilterParams((prev) => {
      return !!text && { ...prev, [name]: text };
    });
  });

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory((prevSelectedCategory) =>
      prevSelectedCategory === categoryName ? null : categoryName
    );
  };

  const handleFilter = () => {
    setFilterCategory((prevParams) => ({
      ...prevParams,
      category: selectedCategory,
    }));
  };

  const handleClear = () => {
    setSelectedCategory(null);
    setFilterCategory((prevParams) => ({
      ...prevParams,
      category: "",
    }));
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
          onChange={(e) => onChange(e, "q")}
        />
      </div>

      <h2 className="mt-4 mb-2 text-lg font-semibold">Category</h2>
      {isFetching ? (
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
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
        className="mt-6 px-4 py-2 bg-[#1E293B] text-white rounded-md hover:bg-[#334563] focus:outline-none focus:ring-2 focus:bg-[#334563] disabled:bg-[#1e293b8d]"
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
