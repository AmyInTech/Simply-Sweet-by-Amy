import React from "react";
import Button from "../Button";

function OrderingSection() {
  return (
    <div
      id="home-ordering-section"
      className="flex items-center justify-center bg-[#fff5f5] pt-48"
    >
      <div>
        <img
          src="/img/macaron-background-1.avif"
          className="r h-[550px] rounded-l-xl brightness-125"
        />
      </div>
      <div className="flex h-[550px] flex-col items-center justify-center gap-12 rounded-r-xl bg-[#fafafa] px-[100px] text-center font-[Raleway]">
        <div className="font-[Sacramento] text-5xl tracking-wide text-[#3bc9db]">
          We're Happy You're Here!
        </div>
        <div className="font-[Raleway] text-3xl tracking-[0.1em] text-stone-500">
          {" "}
          Ready to start an order?
        </div>
        <div>
          <Button to="/menu" type="primary">
            Continue Ordering, {username}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OrderingSection;
