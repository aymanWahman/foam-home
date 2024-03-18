
// import Image from "next/image";
// import Link from "next/link";
import Slideshow from '@/components/Slideshow';

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
  <h3 className="text-center font-bold text-4xl text-yellow-400 mb-5">عرض رمضان</h3>
  <h5 className="text-center text-xl font-bold">خدمة التوصيل مجانا </h5>
</div>


    </div>
  );
}
