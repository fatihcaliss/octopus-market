"use client";
import { ProductDetailContent } from "@/components/ProductDetailContent/ProductDetailContent";
import useGetProductComments from "@/hooks/useGetProductComments";
import useGetProductDetail from "@/hooks/useGetProductDetail";
import { useRouter } from "next/navigation";

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
    <div className="grid grid-cols-12 gap-4 mt-8 mx-40">
      <div className="col-span-12 md:col-span-4">col1</div>
      <div className="col-span-12 md:col-span-8">
        <ProductDetailContent
          productDetailData={productDetailData}
          productCommentsData={productCommentsData}
        />
      </div>
    </div>
  );
};

export default ProductDetailPage;
