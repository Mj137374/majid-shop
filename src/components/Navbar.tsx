"use client";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import Container from "./Container";
import { useShopingCartContext } from "@/context/ShopingCartContext";
import Cookies from "js-cookie";



export default function Navbar() {
    const pathname = usePathname();

    const { cartTotalQty } = useShopingCartContext()

    const navLinks = [
        {
            href: "/",
            title: "Home"
        },
        {
            href: "/Store",
            title: "Store"
        },
        {
            href: "/dashboard",
            title: "dashboard"
        },
        {
            href: "/login",
            title: "Login"
        },
    ]



    return (
        <nav className="shadow p-4 text-center">
            <Container>
                {
                    navLinks.map((item) => (
                        <Link key={item.href} className={`mr-4 gap-4 justify-center items-center 
                     ${pathname === item.href ? "text-sky-600" : ""}`} href={item.href}>
                            {item.title}
                        </Link>
                    ))
                }

                <div className="flex flex-nowrap">
                    <span className="px-2 py-2 bg-red-200 rounded-full text-white">{cartTotalQty}</span>
                    <Link className="mr-6 mx-12 h-2 font-serif " href="/Cart">Shoping Cart</Link>
                    <button onClick={()=>{
                        Cookies.remove("token")
                        redirect("login")
                    }} className="ml-4 text-red-100">Exit</button>
                </div>
            </Container>
        </nav>
    );
}