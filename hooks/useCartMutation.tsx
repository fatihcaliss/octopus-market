import { patchUserCart } from "@/services";
import { useMutation } from "@tanstack/react-query";

const useCartMutation = () =>
  useMutation({
    mutationFn: patchUserCart,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

export default useCartMutation;
