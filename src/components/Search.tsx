"use client"
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";


export default function Search() {

    const searchParams = useSearchParams();
    const router = useRouter();
    const [search, setSearch] = useState("");

    const handleSearch = () => {

        const currentSearchParams = new URLSearchParams(searchParams.toString())

        currentSearchParams.set("title", search)
        

        router.push(`/Store?${currentSearchParams.toString()}`)
    }

    return (
        <div>
            <input onChange={(e) => setSearch(e.target.value)} className="bg-gray-300" type="text" placeholder="Search" />
            <button onClick={handleSearch} className="bg-sky-600 text-white p-1 rounded-2xl">search</button>
        </div>
    )
}




