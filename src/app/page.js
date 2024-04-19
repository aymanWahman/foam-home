
// import Image from "next/image";
// import Link from "next/link";
import Image from 'next/image';
import Link from 'next/link';
// import Building from '@/components/Building';

export const metadata = {
  title: "Our Products",
};

export default function Home() {
  return (
    <div className="container items-center justify-center mt-32">
      

<div className="p-5">


<div className='items-center justify-center border border-yellow-700 shadow-2xl shadow-black'>
<h3 className="text-center font-bold text-4xl text-yellow-600 my-5 ">عرض الجملة</h3>
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
    <h4 className="text-center font-bold text-xl md:text-2xl text-gray-400 m-5"> عدد 50 كوب قهوة 7 أونز</h4>
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
    <h4 className="text-center font-bold text-xl md:text-2xl text-gray-400 m-5">عدد 50 كوب عصير بالغطاء 12 أونز</h4>
    </div>

    <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3 h-52"
      src="/img/cupP.jpg"
      alt="كوب مياه"
      width={350}
      height={250}
      priority
    />
    <h4 className="text-center font-bold text-xl md:text-2xl text-gray-400 m-5">عدد 50 كوب مياه 250 ملي</h4>
    </div>


    {/* <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/rezo.jpg"
      alt="طبق ريزو"
      width={350}
      height={250}
      priority
    />
        <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 10 طبق ريزو</h4>

    </div> */}

    <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/mostatelG.jpg"
      alt="علبة مستطيل"
      width={350}
      height={250}
      priority
    />
        <h4 className="text-center font-bold text-xl md:text-2xl text-gray-400 m-5">عدد 25 علبة مستطيل 8 أونز بالغطاء</h4>

    </div>

    {/* <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/meal2cover.jpg"
      alt="علبة وجبة بالغطاء"
      width={350}
      height={250}
      priority
    />
        <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 10 علبة وجبة </h4>

    </div> */}

    <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/mfsalyG.jpg"
      alt="طبق مفصلي"
      width={350}
      height={250}
      priority
    />
        <h4 className="text-center font-bold text-xl md:text-2xl text-gray-400 m-5">عدد 25 طبق مفصلي 375 جرام</h4>

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
        <h4 className="text-center font-bold text-xl md:text-2xl text-gray-400 m-5">عدد 20 علبة صوص 2 أونز بالغطاء</h4>

    </div>

    

    {/* <div className='m-4 col-span-1'>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/spoons.jpg"
      alt="ملاعق وشوك"
      width={350}
      height={250}
      priority
    />
        <h4 className="text-center font-bold text-2xl text-gray-400 m-5">عدد 100 ملعقة وشوكة</h4>

    </div> */}

  </div>
  <h5 className="text-center font-bold text-2xl  m-5"> عرض الجملة بسعر<span className='text-red-500 m-2'>222</span> جنيه</h5>
    <h5 className="text-green-200 text-center text-xl font-bold mb-4">خدمة التوصيل مجانا </h5>

</div>

<div className='items-center justify-center border border-yellow-700 shadow-2xl shadow-black mt-4'>
<div className='m-4 '>
    <Image
      className="rounded shadow-2xl shadow-black p-2 mx-auto md:my-3  h-52"
      src="/img/appleb.jpg"
      alt="رول استريتش "
      width={350}
      height={250}
      priority
    />
    <h4 className="text-center font-bold text-xl md:text-2xl text-gray-400 m-5"> اشتري عدد 10 كراتين وأحصل علي واحدة مجانا</h4>
    <h5 className="text-center font-bold text-2xl  m-5"> الكرتونة مقاس 30 وزن 4.5 كيلو بسعر<span className='text-red-500 m-2'>550</span> جنيه</h5>

    </div>
    <h5 className="text-green-200 text-center text-xl font-bold mb-4">خدمة التوصيل مجانا </h5>
</div>

 
  <button  className='bg-yellow-700 rounded-xl p-3 mt-4 w-full font-bold text-2xl text-black'><Link href="/products">المنتجات</Link></button>


</div>


    </div>
  );
}
