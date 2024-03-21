
import products from "@/components/dataProducts";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our product",
};
export default function ProductDetailsPage({ params }) {
  const productId = params.productId;

  // Find the product with the specified ID
  const product = products.find((p) => p.id.toString() === productId);

  if (!product) {
    // If the product with the given ID is not found, you can handle it accordingly
    return (
      <p className="text-center text-red-600 mt-40 mb-20">Product not found</p>
    );
  }

  return (
    <div className="mt-44">
      {/* <h5 className="text-center font-bold text-l md:text-2xl mt-2">
        المنتج
      </h5> */}

      <div className="mx-16">

        <div key={product.id} className="grid md:grid-cols-2 md:my-5 mx-auto md:border border-yellow-600 rounded ">
          
          <div>
            <Image
              className="rounded shadow-2xl shadow-black mx-auto my-5 h-58"
              src={product.image}
              alt={product.title}
              width={400}
              height={200}
              priority
            />
          </div>

          <div className="text-center items-center justify-center my-auto">
            <h1 className="font-bold text-2xl md:text-5xl mb-9">
              {product.title}
            </h1>
        
          <p className="text-sm md:text-2xl mt-7">{product.description}</p>
          <p className="text-xl md:text-2xl mt-7"> {product.price} <span className="text-green-600">L.E </span> </p>
        </div>

        </div>

        <div className="flex gap-1 my-6 text-black text-center items-center justify-center">
          <button className="bg-yellow-600 rounded-xl p-2 m-4 w-full font-bold">
            <Link href={`/products`}>الصفحة الرئيسية</Link>
          </button>
        </div>

      </div>

    </div>
  );
}
