
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
    <div className="container items-center justify-center mt-32">

<div className='items-center justify-center w-auto '>
    <Slideshow/>
   </div>
      

<div className="p-5">
  <h3 className="text-center font-bold text-4xl text-yellow-400 mb-5">عروض رمضان</h3>

<div className='items-center justify-center'>
  <h3 className="text-center font-bold text-4xl text-gray-400 mb-5">سرفيس العزومة</h3>
  <div className='grid md:grid-cols-3'>

    <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/cupK.jpg"
      alt="كوب قهوة"
      width={350}
      height={250}
      priority
    />
    <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 25 كوب قهوة</h4>
    </div>

    <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/cupPG.jpg"
      alt="كوب عصير"
      width={350}
      height={250}
      priority
    />
    <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 25 كوب عصير</h4>
    </div>

    <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/cupP.jpg"
      alt="كوب مياه"
      width={350}
      height={250}
      priority
    />
    <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 25 كوب مياه</h4>
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
        <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 10 طبق ريزو</h4>

    </div>

    <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/mostatelG.jpg"
      alt="علبة مستطيل"
      width={350}
      height={250}
      priority
    />
        <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 10 علبة مستطيل بالغطاء</h4>

    </div>

    <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/meal2cover.jpg"
      alt="علبة وجبة بالغطاء"
      width={350}
      height={250}
      priority
    />
        <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 10 علبة وجبة </h4>

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
        <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 10 طبق مفصلي</h4>

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
        <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 10 علبة صوص بالغطاء</h4>

    </div>

    <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/spoons.jpg"
      alt="ملاعق وشوك"
      width={350}
      height={250}
      priority
    />
        <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 100 ملعقة وشوكة</h4>

    </div>

  </div>
  <h5 className="text-center font-bold text-2xl  m-5">سرفيس العزومة بسعر<span className='text-red-500 m-2'>335</span> جنيه</h5>
    <h5 className="text-green-200 text-center text-xl font-bold">خدمة التوصيل مجانا </h5>

</div>

 
  <button  className='bg-yellow-600 rounded-xl p-3 mt-4 w-full font-bold'><Link href="/products">المنتجات</Link></button>


</div>


    </div>
  );
}
