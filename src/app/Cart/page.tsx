"use client"
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { useShopingCartContext } from "@/context/ShopingCartContext";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { IProductItemPrps } from "@/components/ProductItem";
import { formatNumberWithCommas } from "@/utils/number";


interface IDiscount {
    id: number;
    code: string;
    percentage: number

}




export default function Cart() {

    const { cartItems } = useShopingCartContext();
    const [data, setData] = useState<IProductItemPrps[]>([]);
    const [discountCode, setDiscountCode] = useState("");
    const [discountPrice, setDiscountPrice] = useState (0);
    const [finalPrice, setFinalPrice] = useState(0);



    useEffect(() => {
        axios(`http://localhost:3004/product`).then((result) => {
            const { data } = result;
            setData(data);

        });
    }, []);


    let totalPrice = cartItems.reduce((total, item) => {
        let selectedProduct = data.find((product) => product.id == item.id.toString())

        return total + (selectedProduct?.price || 0) * item.qty
    }, 0)




    const handleSubmitDiscount = () => {
        axios(`http://localhost:3004/discounts?code${discountCode}`).then((result) => {
            const  data  = result.data as IDiscount[];

            let discountPrice = (totalPrice * data[0].percentage) / 100;
            let finalPrice = totalPrice - discountPrice
            setFinalPrice(finalPrice);
            setDiscountPrice(discountPrice);
        });
    }


    return (
        <Container>
            <h1 className="text-right my-3 mx-12 p-2 font-sans text-2xl">Shoping Cart</h1>


            <div className="">
                {
                    cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))
                }
            </div>

            <div className="border shadow-md p-4">
                <h3>
                    Total Price :
                    <span>{
                        formatNumberWithCommas(totalPrice)
                    }$

                    </span>

                </h3>
                <h3>
                    Is sale :
                    <span>{formatNumberWithCommas(discountPrice)}$</span>
                </h3>
                <h3>
                    End Price :
                    <span>{formatNumberWithCommas(finalPrice)}$</span>
                </h3>

                <div>
                    <input placeholder="Fix Your Code To Sale"
                        type="text"
                        onChange={(event) => setDiscountCode(event.target.value)} />


                    <button onClick={handleSubmitDiscount} className="bg-sky-600 text-white px-4 py-1 rounded"> Click in</button>
                </div>
            </div>
            <hr />

        </Container>
    )
}