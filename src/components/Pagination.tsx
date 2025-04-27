"use client"
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";


export default function Pagination({ pageCount }: { pageCount: number }) {

    const router = useRouter();
    const searchParams = useSearchParams();

    const handlePageClick = (e: { selected: number }) => {
        const page = e.selected + 1

        const currentSearchParams = new URLSearchParams(searchParams.toString())


        currentSearchParams.set("page", page.toString())
        currentSearchParams.set("per_page", "4" )

        router.push(`/Store?${currentSearchParams.toString()}`);
    };



    return (
        <div>
            {/* <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            /> */}



            <ReactPaginate
                className="flex justify-center mb-12"
                breakLabel="..."
                nextLabel="Next>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="flex justify-center items-center space-x-2 mt-6"
                pageClassName="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100"
                pageLinkClassName="text-gray-700"
                activeClassName="bg-blue-500 text-white"
                previousClassName="rounded-lg border border-gray-300 px-3 py-2 hover:bg-gray-100"
                nextClassName="rounded-lg border border-gray-300 px-3 py-2 hover:bg-gray-100"
                breakClassName="px-2 py-2"
            />

        </div>
    )
}











