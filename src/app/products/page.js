
import Slideshow from '@/components/Slideshow';
import Image from 'next/image';
import products from '../../components/dataProducts';
import Link from 'next/link';

export const metadata = {
  title: "Our Product",
};

export default function Products() {

  return (
  <div className='mt-32'>

   <h5 className='text-center font-bold text-l md:text-2xl mt-2'>Our Products</h5>
   <div className='items-center justify-center w-auto'>
    <Slideshow/>
   </div>

    <div className = "grid grid-cols-1 md:grid-cols-3  mb-3 items-center justify-between gap-1">
    {products && products.map((p) => (
      <div className='mx-16' key={p.id}>
    <div  className='my-5 mx-auto border border-yellow-600 rounded '>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src={p.image}
      alt={p.title}
      width={350}
      height={250}
      priority
    />
    <h1 className='text-center font-bold text-lg md:text-2xl mt-4'>{p.title}</h1>

  <div className='flex gap-1 mt-3 text-black text-center items-center justify-center'>  
    {/* <button className='bg-orange-600 rounded-xl p-2 m-4 w-full font-bold'>Add To Cart</button> */}
    
<button  className='bg-yellow-600 rounded-xl p-2 m-4 w-full font-bold'><Link href={`/products/${p.id}`}>Show more</Link></button>
  

</div>

  </div>

    </div>
   ))}
    </div>

  </div>
  )
}


