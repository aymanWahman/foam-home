import Image from "next/image";
import Link from "next/link";
import Slideshow from '@/components/Slideshow';

// import Head from "next/head";

// export const metadata = {
//   title: "Learn with me",
// };

export default function Home() {
  return (
    <div className="container mt-28">
      {/* <Head>
        <title>Languages Learn</title>
        <meta name="description" content="Learn languages" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

<div className='items-center justify-center w-auto'>
    <Slideshow/>
   </div>

      <div className=" mt-32 mb-16">
      
      

<div className="mt-7 p-5">
  <h5 className="text-center font-bold">خدمة التوصيل مجانا </h5>
</div>


      </div>
    </div>
  );
}
