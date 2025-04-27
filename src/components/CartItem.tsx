import React, { useEffect, useState } from "react";
import axios from "axios";
import { IProductItemPrps } from "./ProductItem";
import AddToCart from "./AddToCart";
import { formatNumberWithCommas } from "@/utils/number";



interface ICartItemProps {
    id: number;
    qty: number;
}



export default function CartItem({ id, qty }: ICartItemProps) {

    const [data, setData] = useState({} as IProductItemPrps);

    useEffect(() => {
        axios(`http://localhost:3004/product/${id}`).then((result)=>{
            const { data }  =  result;
            setData(data);
            
        })
    }, [])



    return (
        <div className="grid grid-cols-12 bg-gray-100 mb-4">
            <img className="col-span-2 mx-3 shadow-2xl" src="https://www.famousfootwear.com/blob/product-images/20000/33/24/6/33246_right_feed1000.jpg" alt="" />

            <div className="col-span-10 p-6 m-6 items-center grid grid-cols-1">
                <h2 className="font-serif text-xl">New Product :</h2>
                <p>Qty : <span>{qty}</span></p>
                <p>Price : <span>{formatNumberWithCommas (data.price ?? 0)}$</span></p>


                <AddToCart id={id.toString(id)} />

            </div>
        </div>

    );
}