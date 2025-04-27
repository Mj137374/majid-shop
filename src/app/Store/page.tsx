import Container from "@/components/Container";
import Pagination from "@/components/Pagination";
import ProductItem, { IProductItemPrps, IProductList } from "@/components/ProductItem";
import Search from "@/components/Search";
import Link from "next/link";
import React from "react";


interface IStoreProps {
  params: Promise<{}>;
  searchParams: Promise<{ page: string; per_page: string, title: string }>;
}

export default async function Store({ searchParams }: IStoreProps) {

  const page = (await searchParams).page ?? "1"
  const per_page = (await searchParams).per_page ?? "4"
  const title = (await searchParams).title ?? ""



  const result = await fetch(`http://localhost:3004/product?_page=${page}&_per_page=${per_page}&title=${title}`);
  const data = (await result.json()) as IProductList;



  return (
    <Container>
      {/* هدر زیبا */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-10 shadow-lg mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Welcome to the Store</h1>
        <p className="text-lg opacity-90">Find the best products tailored for you</p>
      </div>
      <Search />
      {/* لیست محصولات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 pb-20">
        {data.data.map((item) => (
          <Link
            key={item.id}
            href={`/Store/${item.id}`}
            className="transform transition-transform hover:scale-[1.03] hover:shadow-xl duration-300"
          >
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
      <Pagination pageCount={data.pages} />
    </Container>
  );
}




