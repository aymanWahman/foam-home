
'use client'

import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/24/solid';
import Image from 'next/image';
import {Zoom} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = () => {
  const images = [
    "/img/cupK.jpg",
    "/img/cupP.jpg",
    "/img/mfsalyG.jpg",
    "/img/mostatel1000.jpg",
    "/img/mostatelG.jpg",
    "/img/plate1.jpg",
    "/img/plateyellow.jpg",
    "/img/cheasecake.jpg",
    "/img/cupPG.jpg",
    "/img/icecream.jpg",
    "/img/zbady.jpg",
    "/img/meal2B.jpg",
    "/img/meal3.jpg",
    "/img/meal2cover.jpg",
    "/img/shorba.jpg",
    "/img/cupPGm.jpg",
    "/img/mfsalyG.jpg",
    "/img/mostatelG.jpg",
    "/img/rezo2.jpg",
    "/img/plateLight.jpg",
    "/img/sosG.jpg",
    "/img/salad375.jpg",
    "/img/rezo.jpg",
    
  ]

  const ZoomInProperties = {
    scale:1,
    duration: 5000,
    transitionDuration: 300,
    infinity: true,
    prevArrow:(
      <div className='md:ml-96 top-64 md:top-92 '>
        <ArrowLeftIcon className='h-8 w-8 text-yellow-600 cursor-pointer' />
      </div>
    ),
    nextArrow:(
      <div className='md:mr-96 top-64 md:top-92'>
        <ArrowRightIcon className='h-8 w-8 text-yellow-600 cursor-pointer' />
      </div>
    )
  }
  return (
    <div className='mt-5 '>
    <Zoom {...ZoomInProperties}>
      {images.map((each, index) => (
        <div key={index} className='flex justify-center md:items-center items-start w-screen relative shadow-2xl '>

          <Image src={each} alt='Welcome to our world' width={350} height={300}  className= "w-screen md:w-3/12 h-96 rounded-xl"  />

        {/* <h1 className='absolute md:top-60 top-24 inset-x-1/4 text-center z-10  text-2xl md:text-4xl bold text-white'>hgkk</h1> */}

        {/* <p className='absolute top-80 inset-x-1/4 text-center z-10 text-xs md:text-xl bold text-orange-500 hover:text-gray-600'>Everything you can imagine is real</p> */}
        </div>
      ))}
    </Zoom>
    </div>
  );
}

export default Slideshow;
