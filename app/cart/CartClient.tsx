'use client'

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ItemContant from "./ItemContant";
import { formatePrice } from "@/utils/formatPrice";

const CartClient = () => {
  const {
    cartProducts,
    handleClearCart,
    cartTotalAmount,
  } = useCart();

  if(!cartProducts || cartProducts.length === 0) {
    return (
      <div
        className="
          flex
          flex-col
          items-center
        "
      >
        <div className="text-2x1">Yourcart is empty</div>
        <div>
          <Link
            href={"/"}
            className="
              text-slate-500
              flex
              items-center
              gap-1
              mt-2
            "
          >
              <MdArrowBack />
            <span>Start Shooping</span>
          </Link>
        </div>
      </div>
    );
  }

  return ( 
    <div>
      <Heading
        title="Shopping Cart"
        center
      />
      <div
        className="
          grid
          grid-cols-5
          text-xs
          gap-4
          pb-2
          items-center
          mt-8
        "
      >
        <div
          className="
            col-span-2
            justify-self-start
          "
        >
          PRODUCT
        </div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {cartProducts && cartProducts.map((item) => {
          return (
            <ItemContant 
              key={item.id}
              item={item}
            />
          );
        })}
      </div>
      <div
        className="
          border-t-[1.5px]
          border-slate-200
          py-4
          flex
          justify-between
          gap-4
        "
      >
        <div className="w-[100px]">
          <Button
            label="Clear Cart"
            onClick={() => {handleClearCart()}}
            small
            outline
          />
        </div>
        <div
          className="
            text-sm
            flex
            flex-col
            gap-1
            items-start
          "
        >
          <div
            className="
              flex
              justify-between
              w-full
              text-base
              font-semibold
            "
          >
            <span>Subtotal</span>
            <span>{formatePrice(cartTotalAmount)}</span>
          </div>
          <p className="text-slate-500">
            Taxes and shipping calculate at checkout
          </p>
          <Button 
            label="Checkout"
            onClick={() => {}}
          />
          <Link
            href={"/"}
            className="
              text-slate-500
              flex
              items-center
              gap-1
              mt-2
            "
          >
              <MdArrowBack />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
   );
};
 
export default CartClient;
