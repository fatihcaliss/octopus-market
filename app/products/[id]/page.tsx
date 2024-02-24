"use client";
import { ProductDetailContent } from "@/components/ProductDetailContent/ProductDetailContent";
import useGetProductComments from "@/hooks/useGetProductComments";
import useGetProductDetail from "@/hooks/useGetProductDetail";
import { useRouter } from "next/navigation";
import ImageGallery from "react-image-gallery";

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const { productDetailData, isFetching, error } = useGetProductDetail(
    params.id
  );
  const { productCommentsData, isFetching: commentsIsLoading } =
    useGetProductComments(params.id);
  const router = useRouter();

  if (isFetching) {
    return <h1>Loading....</h1>;
  }

  if (productDetailData === undefined || error) {
    return (
      <div className="text-center">
        <h1 className="">PRODUCT NOT FOUND</h1>
        <button type="button" onClick={() => router.push("/")}>
          Back to Home Page
        </button>
      </div>
    );
  }
  console.log("productDetailData", productDetailData);
  return (
    <div>
      <div className="grid grid-cols-12 gap-20 mt-8 mx-40 max-w-full">
        <div className="col-span-12 md:col-span-4">
          <ImageGallery
            items={productDetailData.images.map((image) => ({
              original: image,
              thumbnail: image,
            }))}
          />
        </div>
        <div className="col-span-12 md:col-span-8">
          <ProductDetailContent
            productDetailData={productDetailData}
            productCommentsData={productCommentsData}
          />
        </div>
      </div>
      <div className="col-span-12 mt-10 border-t border-b">
        <div className="flex items-center justify-evenly">
          <h1 className="font-bold px-6 py-4 border">Order Summary:</h1>
          <div className="px-6">
            <h1 className="font-bold text-sm">{productDetailData.title}</h1>
            <p>{productDetailData.description}</p>
          </div>
          <p className="font-bold text-3xl">${productDetailData.price}</p>
          <button className=" bg-[#00B500] text-white px-4 py-2   rounded-md z-50">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
