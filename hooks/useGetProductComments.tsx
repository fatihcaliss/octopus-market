import { IComment } from "@/models/comments.model";
import { fetchProductCommentsById } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useGetProductComments = (productId: string) => {
  const {
    data: productCommentsData,
    error,
    isFetching,
  } = useQuery<IComment>({
    queryKey: ["getProductComments", productId],
    queryFn: () => fetchProductCommentsById(productId),
    enabled: !!productId,
    placeholderData: {} as IComment,
  });

  return { productCommentsData, error, isFetching };
};

export default useGetProductComments;
