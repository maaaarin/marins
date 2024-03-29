import { addItem } from "@/lib/store/slices/bag.slice";
import { Product } from "@/types";
import React from "react";
import { useDispatch } from "react-redux";

type Props = {
  product: Product
}

export const AddItemButton = ({product}: Props) => {

  const dispatch = useDispatch()

  function handleAddItem() {
    dispatch(addItem({product}));
  }

  return (
    <button
      className="size-14 bg-primary rounded-full grid place-items-center z-20"
      onClick={() => {
        handleAddItem();
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="size-3/5 text-white"
        viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
        />
      </svg>
    </button>
  );
};
