"use client"
import Container from "@/components/Container";
import axios from "axios";
import React, { useState } from "react";
import Cookie from 'js-cookie';
import { redirect } from "next/navigation";

export default function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPssword] = useState("");



    const handleSubmit = () => {


        // const data = axios({
        //     method: "POST",
        //     url: "login",
        //     data: {
        //         username: userName,
        //         password: password,
        //     }
        // });



        const response = {
            token : "dfknvdkfvn;dfvkfnvkjnvdfnfvlk",
            expire : 7,
        };

        Cookie.set("token", response.token, { expires: response.expire });
        redirect("/dashboard");

    };


   
    return (
        <div className="bg-gray-300 min-h-screen flex items-center justify-center">
            <Container>
                <div className="bg-white border p-8 rounded-2xl shadow-md space-y-6 w-80 mx-auto">
                    <input onChange={(event) => setUserName(event.target.value)}
                        type="text"
                        placeholder="Username"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input onChange={(event) => setPssword(event.target.value)}
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button onClick={handleSubmit} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                        Submit
                    </button>
                </div>
            </Container>
        </div>
    );
}




