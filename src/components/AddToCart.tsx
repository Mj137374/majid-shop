"use client"
import { useShopingCartContext } from "@/context/ShopingCartContext";
import React from "react";


interface IAddToCart {
    id: string
}


export default function AddToCart({ id }: IAddToCart) {

    const { cartItems,
        handleIncreaseProductQty,
        getProductQty,
        handleDecreaseProductQty,
        handleRemoveProduct } = useShopingCartContext()

   

    return (
        <div>
            <div className="mt-3">
                <button onClick={() => handleIncreaseProductQty(parseInt(id))}
                    className="m-3.5 px-3 py-1.5 bg-sky-300 rounded-2xl">click in</button>

                <span className="mx-2"> {getProductQty(parseInt(id))} </span>


                <button onClick={() => handleDecreaseProductQty(parseInt(id))}
                    className="m-3.5 px-3 py-1.5 bg-sky-300 rounded-2xl">click out</button>

            </div>
            <button onClick={() => handleRemoveProduct(parseInt(id))}
                className="bg-red-300 text-white rounded-2xl  px-10 py-3 mt-2">Delete</button>
        </div>
    )
}