import { patchUserCart } from "@/services";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useCartMutation = () =>
  useMutation({
    mutationFn: patchUserCart,
    onSuccess: (data) => {
      toast.success(
        "Congratulations! 🎉 You have successfully added a product to your cart!"
      );
      // console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

export default useCartMutation;
