
// import Image from "next/image";
// import Link from "next/link";
import Slideshow from '@/components/Slideshow';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Our Products",
};

export default function Home() {
  return (
    <div className="container mt-32">

<div className='items-center justify-center w-auto '>
    <Slideshow/>
   </div>
      

<div className="p-5">
  <h3 className="text-center font-bold text-4xl text-yellow-400 mb-5">عروض رمضان</h3>

<div>
  <h3 className="text-center font-bold text-4xl text-gray-400 mb-5">كرتونة العيلة</h3>
  <div className='grid md:grid-cols-5'>

    <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/cupPG.jpg"
      alt="كوب عصير"
      width={350}
      height={250}
      priority
    />
    <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 50 كوب عصير</h4>
    </div>

    <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/rezo.jpg"
      alt="طبق ريزو"
      width={350}
      height={250}
      priority
    />
        <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 20 طبق ريزو</h4>

    </div>

    <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/mostatel1000.jpg"
      alt="علبة مستطيل"
      width={350}
      height={250}
      priority
    />
        <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 20 علبة مستطيل بالغطاء</h4>

    </div>

    <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/mfsalyG.jpg"
      alt="طبق مفصلي"
      width={350}
      height={250}
      priority
    />
        <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 20 طبق مفصلي</h4>

    </div>

    <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/sauceG.jpg"
      alt="علبة صوص"
      width={350}
      height={250}
      priority
    />
        <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 20 علبة صوص بالغطاء</h4>

    </div>

  </div>
  <h5 className="text-center font-bold text-2xl  m-5">كرتونة العيلة بسعر <span className='text-red-500 m-2'>500</span> جنيه</h5>
</div>

  <h5 className="text-center text-xl font-bold">خدمة التوصيل مجانا </h5>
  <button  className='bg-yellow-600 rounded-xl p-2 m-4 w-full font-bold'><Link href="/products">المنتجات</Link></button>

</div>


    </div>
  );
}
