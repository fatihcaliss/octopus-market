"use client";

import { ProductsFilterContainer } from "@/components/ProductsFilterContainer/ProductsFilterContainer";
import { signOut } from "next-auth/react";

const ProductsPage = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mt-8 mx-40">
      <div className="col-span-12 md:col-span-4">
        <ProductsFilterContainer />
      </div>
      <div className="col-span-12 md:col-span-8">cont-2</div>
    </div>
    // <button onClick={() => signOut()}>Log Out</button>
  );
};

export default ProductsPage;
