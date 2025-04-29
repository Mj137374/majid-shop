import Link from "next/link";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <main className="min-h-screen bg-gray-50 font-sans">
        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white py-24 px-6 text-center relative overflow-hidden">
          <h1 className="text-5xl font-extrabold mb-4 uppercase tracking-wide">Step Into Style</h1>
          <p className="text-lg mb-8 text-gray-300">Discover the freshest kicks in town</p>
          <Link
            href="/Store"
            className="inline-block bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Shop Sneakers
          </Link>
        </section>

        {/* CATEGORIES */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Shop by Style</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {["Men", "Women", "Sport", "New Arrivals"].map((cat) => (
              <div
                key={cat}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 text-center cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-gray-700">{cat}</h3>
                <p className="text-sm text-gray-500 mt-2">Explore {cat} Collection</p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="bg-gray-100 py-16 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Top Picks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition"
              >
                <div className="">
                  <img src="https://www.famousfootwear.com/blob/product-images/20000/33/24/6/33246_right_feed1000.jpg" alt="" />
                  <span className="text-gray-500">Sneaker {id}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">Sneaker Model {id}</h3>
                <p className="text-sm text-gray-500">$129.99</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="py-20 px-6 text-center bg-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Bitastore</h2>
          <p className="max-w-2xl mx-auto text-gray-200">
            At Bitastore, we bring you the latest sneaker trends with comfort and style. Whether you're into classics or bold new designs — we got your feet covered.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="bg-black text-white py-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Bitastore — All rights reserved.
        </footer>
      </main>
    </Container>
  );
}
