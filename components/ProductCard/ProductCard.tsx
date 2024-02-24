import { IProduct } from "@/models/product.model";
import Image from "next/image";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProductCardProps) => {
  const filledStars = Array.from(
    { length: Math.round(product.rating) },
    (_, index) => (
      <svg
        key={index}
        className="w-4 h-4 fill-current text-yellow-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 1l2.5 6.5H18l-5 3.8 1.7 6.3L10 14.3 5.3 17.6l1.7-6.3-5-3.8h5.5L10 1z"
          clipRule="evenodd"
        />
      </svg>
    )
  );

  const emptyStars = Array.from(
    { length: 5 - Math.round(product.rating) },
    (_, index) => (
      <svg
        key={index}
        className="w-4 h-4 fill-current text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 1l2.5 6.5H18l-5 3.8 1.7 6.3L10 14.3 5.3 17.6l1.7-6.3-5-3.8h5.5L10 1z"
          clipRule="evenodd"
        />
      </svg>
    )
  );

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <div className="relative w-full h-48">
        <Image
          src={product.thumbnail}
          alt={product.title}
          className="object-cover rounded-lg"
          //   width={192}
          //   height={192}
          layout="fill"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="text-lg font-semibold mt-2">${product.price}</p>
        <div className="flex items-center mt-2">
          <div className="flex">
            {filledStars}
            {emptyStars}
          </div>
          <span className="ml-1 text-gray-500">
            {product.rating.toFixed(1)}
          </span>
        </div>
        <button className="bg-[#00B500] text-white px-4 py-2 mt-2 w-full rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
