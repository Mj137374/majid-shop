import React from "react";


export interface IProductItemPrps {
    id: string,
    image: string,
    title: string,
    description: string,
    price: number,
}


export interface IProductList {
    first: number | null;
    items: number | null;
    last: number | null;
    next: number | null;
    pages: number;
    prev: number | null;
    data : IProductItemPrps[]
}

export default function ProductItem({ image, title, description, price }: IProductItemPrps) {
    return (
        <div className="shadow-md">
            <img src={image} alt="" />


            <div className="p-2">
                <h3 className="font-serif">{title}</h3>
                <h3>{price}</h3>
                <p className="font-light">{description}</p>
            </div>
        </div>
    )
}