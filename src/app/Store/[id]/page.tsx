import Container from "@/components/Container";
import { IProductItemPrps } from "@/components/ProductItem";
import React from "react";
import AddToCart from "@/components/AddToCart";




interface IProductProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{}>;
}



export default async function Porduct({ params }: IProductProps) {

    const { id } = await params;

    const result = await fetch(`http://localhost:3004/product/${id}`);
    const data = (await result.json()) as IProductItemPrps;


    return (
        <Container>
            <div className="grid grid-cols-12">


                <div className="col-span-9 mt-8 shadow-md text-2 p-12 ">
                    <h2 className="font-serif text-3xl">{data.title}</h2>

                    <p className="text-gray-500 font-medium">{data.description}</p>

                    <p>{data.price}$</p>

                    <p className="font-normal ">{data.id}</p>

                    <AddToCart id={id} />

                </div>


                <div className="col-span-3">
                    <img src={data.image} alt="" />
                </div>


            </div>
        </Container>
    )
}