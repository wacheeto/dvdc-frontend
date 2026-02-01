
import { DM_Sans, Playfair_Display } from "next/font/google";
import Image from "next/image";
import { ArrowRight,Droplets,Leaf,Quote,Shield,ShieldCheck, Star, Stethoscope, Users, Wifi } from "lucide-react";
import { Google } from "@mui/icons-material";
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
        id="hero" className="h-[90vh] bg-white text-black relative flex  ">
        <div className="flex-1 flex flex-col items-center justify-center absolute inset-0 z-50 lg:static lg:z-auto">
          <div className=" flex  flex-col items-center md:items-start">
            <h1 className={`text-4xl lg:text-6xl lg:text-start font-bold text-center ${playfair.className} `}>Caring for Your Smile, <br /> Every Step of the Way</h1>
            <p className={` md:text-lg lg:text-start my-4 text-center  ${dmSans.className}`}>Book your appointment today and  experience <br /> dental care designed around you.</p>
            <button className={`btn py-5 w-36 bg-transparent text-black  rounded-full shadow-none ${dmSans.className} hover:bg-zinc-900 hover:text-white`}>Book now!</button>
          </div>
        </div>
        <div
          className="flex-1 flex items-center justify-center absolute inset-0 md:static  text-gray-400 ">
            <img src="test" alt="test" className="h-full  w-full image-full " />
        </div>
      </section>
      {/* years of service,
      certifications,
      patients */}
      <div className="  w-full my-10 p-2 grid grid-cols-2 lg:grid-cols-4  h-fit  ">
        <div className="border-s-3 border-gray-300 p-2 flex flex-col  justify-center">
          <h1 className={`text-4xl lg:text-6xl font-bold text-start ${dmSans.className} `}>20+</h1>
          <span>Years of service</span>
        </div>
        <div className="border-s-3 border-gray-300 p-2 flex flex-col  justify-center">
          <h1 className={`text-4xl lg:text-6xl font-bold text-start ${dmSans.className} `}>10k+</h1>
          <span>Patients treated</span>
        </div>
        <div className="border-s-3 border-gray-300 p-2 flex flex-col  justify-center">
          <h1 className={`text-4xl lg:text-6xl font-bold text-start ${dmSans.className} `}>10k+</h1>
          <span>Patients treated</span>
        </div>
        <div className="border-s-3 border-gray-300 p-2 flex flex-col  justify-center">
          <h1 className={`text-4xl lg:text-6xl font-bold text-start ${dmSans.className} `}>Modern</h1>
          <span>Dental Care</span>
        </div>
      </div>
      {/* about section */}
      <section
        className=" bg-white text-black my-8 md:my-20 h-fit flex md:flex-row flex-col w-full gap-2  "
      >
        <div className=" flex flex-1 items-center justify-center   ">
          <img src="test" alt="test" className="  w-full image-full h-[350px] " />
        </div>
        <div className={` p-2 flex flex-1 flex-col ${dmSans.className}`}>
          <h1 className={`text-4xl lg:text-6xl lg:text-start font-bold text-center ${playfair.className} `}>High-Quality Dental Services Tailored to Your Needs</h1>
          <p className={` md:text-lg lg:text-start my-4 text-center  ${dmSans.className}`}>Gentle treatments delivered by experienced dental professionals you can trust.</p>
          <div className=" grid grid-cols-2">
            <div className=" p-2 flex h-24 items-center justify-center">
              <Droplets className="h-4 w-4 me-2"/>
              <span>Sterile Facility</span>
            </div>
            <div className=" p-2 flex h-24 items-center justify-center">
              <Stethoscope className="h-4 w-4 me-2"/>
              <span>Modern Equipments</span>
            </div>
            <div className=" p-2 flex h-24 items-center justify-center">
              <Leaf className="h-4 w-4 me-2"/>
              <span>Calm Environment</span>
            </div>
            <div className=" p-2 flex h-24 items-center justify-center">
              <ShieldCheck className="h-4 w-4 me-2"/>
              <span>Safe & Hygienic</span>
            </div>
            <div className=" p-2 flex h-24 items-center justify-center">
              <Wifi className="h-4 w-4 me-2"/>
              <span>Wifi Connection</span>
            </div>
            <div className=" p-2 flex h-24 items-center justify-center">
              <Users className="h-4 w-4 me-2"/>
              <span>Family Friendly</span>
            </div>
          </div>
        </div>
      </section>
      <section id="faqs" className=" h-fit flex flex-col p-2 my-8 md:my-20 ">
        <p className={`text-3xl lg:text-5xl font-bold text-center ${playfair.className} `}>Your Frequently Asked Questions</p>
        <span className={` md:text-lg my-4 text-center  ${dmSans.className}`}>Book your appointment today and  experience <br /> dental care designed around you.</span>
        <div className=" flex flex-col justify-center items-center space-y-2 my-8">
          <div className="collapse  rounded-2xl outline-gray-300 outline w-full md:w-[70%]">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">How do I create an account?</div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the registration process.
            </div>
          </div>
          <div className="collapse  rounded-2xl outline-gray-300 outline w-full md:w-[70%]">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">How do I create an account?</div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the registration process.
            </div>
          </div>
          <div className="collapse  rounded-2xl outline-gray-300 outline w-full md:w-[70%]">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">How do I create an account?</div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the registration process.
            </div>
          </div>
          <div className="collapse  rounded-2xl outline-gray-300 outline w-full md:w-[70%]">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">How do I create an account?</div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the registration process.
            </div>
          </div>
          <div className="collapse  rounded-2xl outline-gray-300 outline w-full md:w-[70%]">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">How do I create an account?</div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the registration process.
            </div>
          </div>
        </div>
      </section>
      <section id="reviews" className="h-fit flex flex-col  p-2 my-8 md:my-80 ">
        <span className={`text-lg font-normal text-start ${dmSans.className}`}>Our reviews</span>
        <p className={`text-2xl lg:text-4xl font-bold text-start ${playfair.className} mb-5`}>What our Patients say</p>
        <div className="
          flex overflow-x-auto  scrollbar-hide gap-2
          lg:grid lg:grid-cols-3 lg:overflow-visible px-1 py-2 overflow-y-hidden
        ">
          <div className="shadow-lg p-2 rounded-2xl h-[350px] min-w-[80vw] md:min-w-[40vh] snap-start flex flex-col lg:min-w-0">
            <div className=" p-2 h-fit items-center flex gap-2">
              <div className=" w-10 h-10 rounded-full overflow-hidden  ">
                <img src="as" alt="alt" className="object-contain bg-yellow-200 img-full h-full w-full" />
              </div>
              <p className="">Dwight Schrute</p>
              <div className="grow"/>
              <div className="min-w-16 rounded-full gap-1 p-2 flex outline">
                <Google />
                <span>Google</span>
              </div>
            </div>
            <div className="grow p-4 space-y-2">
                <div className=" h-fit">
                  <Quote className="h-10 w-10" fill="gray" strokeWidth={0}/>
                </div>
                <p>
                  Aute ipsum magna tempor sunt proident Lorem sint irure enim. Nisi cupidatat consequat fugiat minim quis eiusmod labore. Elit ullamco exercitation exercitation consectetur in. 
                </p>
            </div>
          </div>
          <div className="shadow-lg  p-2 rounded-2xl h-[350px] min-w-[80vw] md:min-w-[40vh] snap-start flex flex-col lg:min-w-0">
            <div className=" p-2 h-fit items-center flex gap-2">
              <div className=" w-10 h-10 rounded-full overflow-hidden  ">
                <img src="as" alt="alt" className="object-contain bg-yellow-200 img-full h-full w-full" />
              </div>
              <p className="">Jim Halpert</p>
              <div className="grow"/>
              <div className="min-w-16 rounded-full gap-1 p-2 flex outline">
                <Google />
                <span>Google</span>
              </div>
            </div>
            <div className="grow p-4 space-y-2">
                <div className=" h-fit">
                  <Quote className="h-10 w-10" fill="gray" strokeWidth={0}/>
                </div>
                <p>
                  Et id consectetur id elit ea sunt ullamco cupidatat occaecat Lorem duis. Nisi sunt exercitation officia incididunt elit cupidatat Lorem exercitation eu cillum aute reprehenderit.
                </p>
            </div>
          </div>
          <div className="shadow-lg p-2 rounded-2xl h-[350px] min-w-[80vw] md:min-w-[40vh] snap-start flex flex-col lg:min-w-0">
            <div className=" p-2 h-fit items-center flex gap-2">
              <div className=" w-10 h-10 rounded-full overflow-hidden  ">
                <img src="as" alt="alt" className="object-contain bg-yellow-200 img-full h-full w-full" />
              </div>
              <p className="">Pamela Beasley</p>
              <div className="grow"/>
              <div className="min-w-16 rounded-full gap-1 p-2 flex outline">
                <Google />
                <span>Google</span>
              </div>
            </div>
            <div className="grow p-4 space-y-2">
                <div className=" h-fit">
                  <Quote className="h-10 w-10" fill="gray" strokeWidth={0}/>
                </div>
                <p>
                  Commodo et amet duis eiusmod laborum ut dolor. Et est ipsum aliquip irure exercitation. Laboris dolore dolore culpa voluptate sint id dolor proident. Amet irure ea adipisicing excepteur.
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
