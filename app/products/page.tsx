"use client";

import { ProductsContainer } from "@/components/ProductsContainer/ProductsContainer";
import { ProductsFilterContainer } from "@/components/ProductsFilterContainer/ProductsFilterContainer";
import { useState } from "react";

const ProductsPage = () => {
  const [filterCategory, setFilterCategory] = useState({});
  const [filterParams, setFilterParams] = useState({});

  // console.log("filterParams", filterParams);

  return (
    <div className="grid grid-cols-12 gap-4 mt-8 mx-40">
      <div className="col-span-12 md:col-span-4">
        <ProductsFilterContainer
          setFilterCategory={setFilterCategory}
          setFilterParams={setFilterParams}
        />
      </div>
      <div className="col-span-12 md:col-span-8">
        <ProductsContainer filterParams={filterParams} />
      </div>
    </div>
  );
};

export default ProductsPage;
