import React from "react";
import { formatCurrency } from "../../utils/helpers";

function FeaturedProductsCard({ product }) {
  return (
    <div className="ml-auto mr-auto flex h-[280px] w-[200px] cursor-pointer flex-col items-center justify-around gap-2 rounded-lg bg-white p-5 transition-all">
      <img
        // src="/img/products-cards/products-card-stock-photo-1.avif"
        src={`/img/products-cards/${product.img}`}
        alt={product.title}
        className="h-[150px] w-[150px] rounded-lg object-cover"
      />
      <div className="flex flex-col items-center justify-between gap-3 text-center text-[14px]">
        <div>
          <p>{product.title}</p>
        </div>
        <div>
          <p className="text-base font-semibold text-[#3bc9db]">
            {formatCurrency(product.price)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductsCard;
