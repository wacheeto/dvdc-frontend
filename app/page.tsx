
import { DM_Sans, Playfair_Display } from "next/font/google";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
});


export default function Home() {
  return (
    <>
      <section
        id="hero" className="h-[90vh] bg-white text-black relative flex ">
        <div className="flex-1 flex flex-col items-center justify-center absolute inset-0 z-50 lg:static lg:z-auto">
          <div className=" flex  flex-col items-center md:items-start">
            <h1 className={`text-4xl lg:text-6xl lg:text-start font-bold text-center ${playfair.className} `}>Caring for Your Smile, <br /> Every Step of the Way</h1>
            <p className={` md:text-lg lg:text-start my-4 text-center  ${dmSans.className}`}>Book your appointment today and  experience <br /> dental care designed around you.</p>
            <button className={`btn py-5 w-36 bg-transparent text-black  rounded-full shadow-none ${dmSans.className}`}>Book now!</button>
          </div>
        </div>
        <div
          className="flex-1 flex items-center justify-center absolute inset-0 md:static  text-gray-400 border">
            <img src="test" alt="test" className="h-full outline w-full image-full " />
        </div>
      </section>
      {/* years of service,
      certifications,
      patients */}
      <div className="border border-black w-full p-2 grid  lg:grid-cols-3  h-fit">
        <div className="outline p-2 flex h-24 items-center justify-center">
          test
        </div>
        <div className="outline p-2 flex h-24 items-center justify-center">
          test
        </div>
        <div className="outline p-2 flex h-24 items-center justify-center">
          test
        </div>
      </div>
      {/* about section */}
      <section
        className=" bg-white text-black outline h-fit my-2 flex md:flex-row flex-col w-full gap-2"
      >
        <div className="outline flex flex-1 items-center justify-center   ">
          <img src="test" alt="test" className=" outline w-full image-full h-[350px] " />
        </div>
        <div className="outline p-2 flex flex-1 flex-col ">
          <h1 className={`text-4xl lg:text-6xl lg:text-start font-bold text-center ${playfair.className} `}>High-Quality Dental Services Tailored to Your Needs</h1>
          <p className={` md:text-lg lg:text-start my-4 text-center  ${dmSans.className}`}>Gentle treatments delivered by experienced dental professionals you can trust.</p>
          <div className="outline grid grid-cols-2">
            <div className="outline p-2 flex h-24 items-center justify-center">
              test
            </div>
            <div className="outline p-2 flex h-24 items-center justify-center">
              test
            </div>
            <div className="outline p-2 flex h-24 items-center justify-center">
              test
            </div>

            <div className="outline p-2 flex h-24 items-center justify-center">
              test
            </div>
            <div className="outline p-2 flex h-24 items-center justify-center">
              test
            </div>
            <div className="outline p-2 flex h-24 items-center justify-center">
              test
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="h-fit text-black outline p-2 grid grid-cols-1 lg:grid-cols-3 gap-2 "
      >
        <div className=" outline p-2 w-full rounded-md flex flex-col  ">
          <div className=" my-2">
            <h1 className="text-xl lg:text-4xl ">Credentials 1</h1>
            <p>Veniam non dolor velit occaecat proident anim nostrud aliquip ullamco nostrud nisi.</p>
          </div>
          <div className=" my-2">
            <h1 className="text-xl lg:text-4xl ">Credentials 2</h1>
            <p>Aliqua pariatur consequat consectetur excepteur qui eiusmod ut ut ea ut veniam officia et ad.</p>
          </div>
          <div className=" my-2">
            <h1 className="text-xl lg:text-4xl ">Credentials 3</h1>
            <p>Qui consectetur officia proident reprehenderit.</p>
          </div>
          <div className=" my-2">
            <h1 className="text-xl lg:text-4xl ">Credentials 4</h1>
            <p>Exercitation ullamco eu nostrud sunt dolore consequat.</p>
          </div>
        </div>
        <div className="outline p-2 w-full h-[550px] rounded-md ">
          <img src="hi" alt="dr dp" />
        </div>
        <div className="outline p-2 w-full rounded-md flex flex-col  ">
          <div className=" p-2  gap-2 space-y-4">
            <h1 className="text-xl lg:text-4xl font-semibold mb-4">Founded by ....</h1>
            <p>Quis qui incididunt pariatur magna anim occaecat fugiat. Aliquip qui nulla et Lorem cupidatat. Consequat sit exercitation voluptate laboris irure eiusmod ullamco ipsum irure mollit cupidatat.</p>
            <p>Quis qui incididunt pariatur magna anim occaecat fugiat. Aliquip qui nulla et Lorem cupidatat. Consequat sit exercitation voluptate laboris irure eiusmod ullamco ipsum irure mollit cupidatat.</p>

            <div className=" p-2 flex gap-2 items-center">
              <span>See more</span>
              <ArrowRight className="h-4 w-4"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
