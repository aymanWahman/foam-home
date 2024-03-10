import Image from "next/image";
import Link from "next/link";
// import { ArrowRightIcon} from '@heroicons/react/24/solid';
import { HiPhone } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";

export const metadata = {
  title: "About us",
};

const Page = () => {
  return (
    <div className="mt-36 md:w-3/4  text-center mx-auto  ">
      <div className="grid grid-cols-3 gap-3 text-center justify-center item-center mb-10 m-3 border rounded-2xl p-5 ">
        <div className="col-span-1 m-auto ">
          <Image
            className="rounded-xl shadow-2xl shadow-black md:w-52 h-32 md:h-56"
            src="/img/cupK.jpg"
            alt="Foam Home"
            width={120}
            height={120}
            priority
          />
        </div>

        <div className="col-span-2 my-auto ">
          <h2 className="text-2xl md:text-4xl font-extrabold  text-gray-500 ">
            تسوق
          </h2>
          <p className="mt-4 text-xl md:text-2xl font-extrabold">مع </p>
          <h3 className="mt-4 text-gray-500 text-2xl md:text-4xl font-bold">
          فوم هوم
          </h3>
        </div>
      </div>

      {/* <div className="flex items-center justify-center gap-20 my-15">
        <div>
          <button>
            <Link
              id="you"
              className="text-center text-3xl rounded-xl p-2"
              href="https://www.youtube.com/channel/UCGmWm5dvozP_VzJXT16Llxg/featured"
              target="_blank"
            >
              <div className="bg-red-600 rounded-xl px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 48 48"
                  fill="#ffff"
                >
                  <path d="M20 13v22l14-11z" />
                  <path d="M0 0h48v48h-48z" fill="none" />
                </svg>
              </div>
            </Link>
          </button>
        </div>

        <div>
          <button>
            <Link
              className=" text-center text-3xl rounded-xl p-2"
              href="https://www.facebook.com/me/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 48 48"
                fill="#1877f2"
              >
                <path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm3.274 24.786h-3.391v11.608H18.74V24.786h-2.718v-3.57h2.718v-2.432c0-3.14 1.862-6.11 4.731-6.11 1.367 0 2.538.102 2.878.148v3.3h-1.965c-1.553 0-1.855.739-1.855 1.822v2.385h3.74l-.487 3.57z" />
              </svg>
            </Link>
          </button>
        </div>
      </div> */}


       

      <div className="flex gap-3 md:gap-5 items-center justify-center">
        
      <div><HiPhone size={26} color="red"/></div>
        <p className="text-sm  font-bold">
          01000333377
        </p>
    
        
        <div><IoIosMail size={26} color="#7598ff"/></div>
        <p className="text-xs font-bold">
          aymanwahman@gmail.com
        </p>

        </div>
      

      <div className="my-15">
        <p className="text-center text-sm md:text-xl my-10">
          اللهم ارزقنا من فضلك العظيم في الدنيا والأخرة
        </p>
      </div>

    </div>
  );
};

export default Page;
