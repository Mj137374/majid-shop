"use client"
import Container from "@/components/Container";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";


export default function Dashboard() {

    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        image: "",
        description: ""
    }); 


    const handleChangeProduct = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value , name } = e.target

        setNewProduct({
            ...newProduct,
            [name]: value
        })
    };

    const handleCreateButton = () => {
        console.log(newProduct);

        axios({
            method: "POST",
            url: "http://localhost:3004/product",
            data : {
                id: Math.floor(Math.random() * 1000).toString(),
            image: newProduct.image,
            title: newProduct.title,
            description: newProduct.description,
            price: newProduct.price,
            }
        })
        
    }

    return (
        <div className="bg-slate-300">
            <Container>
                <div className="grid grid-cols-4 gap-4 p-4 m-2 ml-6 text-right">
                    <input onChange={handleChangeProduct} name="title" type="text" placeholder="title" />
                    <input onChange={handleChangeProduct} name="price" type="text" placeholder="price" />
                    <input onChange={handleChangeProduct} name="image" type="text" placeholder="image" />
                </div>
                <textarea onChange={handleChangeProduct} name="description" className="w-full ml-14 mt-4" placeholder="description"></textarea>

                <button onClick={handleCreateButton} className="bg-sky-500 text-white rounded px-4 py-2">New Website Product</button>
            </Container>

        </div>
    )
}