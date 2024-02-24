"use client";

import { IComment } from "@/models/comments.model";
import { IProduct } from "@/models/product.model";

interface IProductDetailContentrProps {
  productDetailData: IProduct;
  productCommentsData?: IComment;
}

export function ProductDetailContent({
  productDetailData,
  productCommentsData,
}: IProductDetailContentrProps) {
  const filledStars = Array.from({ length: 5 }, (_, index) => (
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
  ));

  return (
    <div>
      <h1 className="font-bold text-4xl">{productDetailData.title}</h1>
      <p className="font-normal text-lg text-gray-400 mt-6">
        {productDetailData.description}
      </p>
      <h3 className="font-bold mt-6">Select Color:</h3>
      <div className="flex gap-8 pt-6">
        <button className="py-2 px-6 border text-gray-400 text-sm focus:border focus:text-black">
          Silver
        </button>
        <button className="py-2 px-6 shadow-md text-sm focus:border">
          Black
        </button>
      </div>
      <h3 className="font-bold mt-6">Select Feature:</h3>
      <div className="flex gap-8 pt-6">
        <button className="py-2 px-6 shadow-md text-sm focus:border text-gray-400">
          Feature 1
        </button>
        <button className="py-2 px-6 border-2 text-sm focus:border">
          Feature 2
        </button>
        <button className="py-2 px-6 shadow-md text-sm focus:border text-gray-400">
          Feature 3
        </button>
        <button className="py-2 px-6 shadow-md text-sm focus:border text-gray-400">
          Feature 4
        </button>
      </div>
      <div className="mt-6">
        <h3 className="font-bold mt-6">Customer Reviews:</h3>
        <div className="font-bold mt-6">
          <span className="flex">{filledStars}</span>
          <span className="font-bold text-gray-400 text-sm">
            Username :
          </span>{" "}
          <span>{productCommentsData?.user?.username}</span>
        </div>
        <div>
          <span className="font-bold text-gray-400 text-sm">Comment :</span>
          {productCommentsData?.body}
        </div>
      </div>
    </div>
  );
}
