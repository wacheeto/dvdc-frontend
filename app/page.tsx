
import { DM_Sans, Playfair_Display } from "next/font/google";
import Image from "next/image";
import { ArrowRight,Droplets,Leaf,Quote,Shield,ShieldCheck, Star, Stethoscope, Users, Wifi } from "lucide-react";
import { Google, Info, Phone, PinDrop } from "@mui/icons-material";
import maps from './assets/maps.webp';

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
            <h1 className={`text-4xl lg:text-6xl lg:text-start font-bold text-center ${playfair.className} `} data-aos="fade" data-aos-delay="50" data-aos-duration="1000">Caring for Your Smile, <br /> Every Step of the Way</h1>
            <p className={` md:text-lg lg:text-start my-4 text-center  ${dmSans.className}`} data-aos="fade" data-aos-delay="50" data-aos-duration="1000">Book your appointment today and  experience <br /> dental care designed around you.</p>
            <div className="flex flex-row gap-2">
              <button className={`btn py-5 w-36  bg-zinc-900 text-white  rounded-full shadow-none ${dmSans.className} hover:bg-zinc-800 hover:text-white`} data-aos="fade" data-aos-delay="50" data-aos-duration="1000">Book now!</button>
              <button className={`btn py-5 w-36  bg-transparent text-black  rounded-full shadow-none ${dmSans.className} hover:bg-zinc-800 hover:text-white`} data-aos="fade" data-aos-delay="50" data-aos-duration="1000">Learn more</button>
            
            </div>
          </div>
        </div>
        <div
          className="flex-1 flex items-center justify-center absolute inset-0 md:static  text-gray-400 " data-aos="fade" data-aos-delay="50" data-aos-duration="1000">
            <img src="test" alt="test" className="outline h-screen md:h-[60vh] bg-red-200  w-full" />
        </div>
      </section>
      {/* years of service,
      certifications,
      patients */}
      <div className="  w-full my-10 grid grid-cols-2 lg:grid-cols-4  h-fit" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
        <div className="border-s-3 border-gray-300 p-4 flex flex-col  justify-center">
          <h1 className={`text-4xl p-2 lg:text-6xl font-bold text-start ${dmSans.className} `}>20+</h1>
          <span>Years of service</span>
        </div>
        <div className="border-s-3  border-gray-300 p-4 flex flex-col  justify-center">
          <h1 className={`text-4xl lg:text-6xl font-bold text-start ${dmSans.className} `}>10k+</h1>
          <span>Patients treated</span>
        </div>
        <div className="border-s-3 border-gray-300 p-4 flex flex-col  justify-center">
          <h1 className={`text-4xl lg:text-6xl font-bold text-start ${dmSans.className} `}>98%</h1>
          <span>Patients Satisfaction</span>
        </div>
        <div className="border-s-3 border-gray-300 p-4 flex flex-col  justify-center">
          <h1 className={`text-4xl lg:text-6xl font-bold text-start ${dmSans.className} `}>Modern</h1>
          <span>Dental Care</span>
        </div>
      </div>
      {/* about section */}
      <section
        className=" bg-white text-black my-8 md:my-36 h-fit flex md:flex-row flex-col w-full gap-2 scroll-mt-32 "
        id="service"
      >
        <div className=" flex flex-1 items-center justify-center" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
          <img src="test" alt="test" className="  w-full h-[350px] md:h-full  outline  " />
        </div>
        <div className={` p-2 flex flex-1 flex-col ${dmSans.className}`} data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000">
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
      <section id="location" className="h-fit flex flex-col p-2 my-8 md:my-15 scroll-mt-28" data-aos="fade" data-aos-delay="50" data-aos-duration="1000">
        <div className="flex flex-col md:flex-row gap-2  ">
          <div className=" flex-1 flex flex-col my-4 ">
            <span className={`font-regular text-lg ${dmSans.className}`}>
              Marikina City, Metro Manila
            </span>
            <span className={`font-regular text-5xl md:text-6xl ${playfair.className}`}>
              Clinic Name
            </span>
          </div>
          <div className=" flex-1  items-center flex">
            <span className={`font-regular ${dmSans.className}`}>
              Id est consectetur nostrud ipsum dolor Lorem et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea praesentium, dolorem neque aliquam ipsa, aspernatur nostrum repellendus.
            </span>
          </div>
        </div>
        <div className="relative  w-full h-[250px] md:h-[450px] self-center my-4 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.8932204432267!2d-88.80049402406999!3d41.35467459802385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880955000e076dd7%3A0x8b32e8618294c8e7!2sVolvo%20Island!5e0!3m2!1sen!2sph!4v1770653323577!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className=" w-full flex space-x-2 ">
            <PinDrop sx={{fontSize:'24px'}}/>
            <div className={`space-x-2 text-sm flex flex-col w-full ${dmSans.className}`}>
              <span className={`font-semibold mb-2 text-lg   ${playfair.className}`}>Address</span>
              <p className="font-normal">88 Happy Lane, Barangka Drive</p>
              <p>Marikina City, Metro Manila</p>
              <p>Philippines</p>
            </div>
          </div>
          <div className=" w-full flex  space-x-2 ">
            <Phone sx={{fontSize:'24px'}}/>
            <div className={`space-x-2 text-sm flex flex-col w-full ${dmSans.className}`}>
              <span className={`font-semibold mb-2 text-lg   ${playfair.className}`}>Contact Information</span>
              <div className="w-full flex gap-2 md:justify-between">
                <p className="font-normal">Phone:</p>
                <p>+63 123 456 7890</p>
              </div>
              <div className="w-full flex gap-2 md:justify-between">
                <p className="font-normal">Email:</p>
                <p>example@gmail.com</p>
              </div>
              <div className="w-full flex gap-2 md:justify-between">
                <p className="font-normal">Landline:</p>
                <p>(02) 8000 1234</p>
              </div>
            </div>
          </div>
          <div className=" w-full flex  space-x-2 ">
            <Info sx={{fontSize:'24px'}}/>
            <div className={`space-x-2 text-sm flex flex-col w-full ${dmSans.className}`}>
              <span className={`font-semibold mb-2 text-xl  ${playfair.className}`}>Clinic Hours</span>
              <p>Mon – Sat, 9:00 AM – 6:00 PM</p>
            </div>
          </div>
          {/* <div className=" w-full flex items-center justify-center md:justify-start  space-x-2 ">
            <button className={`btn py-5 w-1/2  bg-zinc-900 text-white text-sm  rounded-xl shadow-none ${dmSans.className} hover:bg-zinc-800 hover:text-white`}>Get Directions</button>
          </div> */}
        </div>
      </section>
      <section id="reviews" className="h-fit flex flex-col  p-2 my-8 " data-aos="fade" data-aos-delay="50" data-aos-duration="1000">
        <span className={`text-lg font-normal text-start ${dmSans.className}`}>Our reviews</span>
        <p className={`text-5xl font-bold text-start ${playfair.className} mb-5`}>What our Patients say</p>
        <div className="
          flex overflow-x-auto  scrollbar-hide gap-2
          lg:grid lg:grid-cols-3 lg:overflow-visible px-1 py-2 overflow-y-hidden
        ">
          <div className="shadow-lg p-2 rounded-2xl h-[350px] min-w-[90vw] md:min-w-[40vh] snap-start flex flex-col lg:min-w-0">
            <div className=" p-2 h-fit items-center flex gap-2">
              <div className=" w-10 h-10 rounded-full overflow-hidden  ">
                <img src="as" alt="alt" className="object-contain bg-yellow-200 img-full h-full w-full" />
              </div>
              <p className="">Dwight Schrute</p>
              <div className="grow"/>
              <div className="min-w-16 rounded-full gap-1 p-2 flex outline bg-zinc-900 text-white">
                {/* <Google /> */}
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
              <div className="min-w-16 rounded-full gap-1 p-2 flex outline bg-zinc-900 text-white">
                {/* <Google /> */}
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
              <div className="min-w-16 rounded-full gap-1 p-2 flex outline bg-zinc-900 text-white">
                {/* <Google /> */}
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
      <section id="faqs" className=" h-fit flex flex-col p-2 my-8 md:my-20 " data-aos="fade" data-aos-delay="50" data-aos-duration="1000">
        <p className={`text-3xl lg:text-5xl font-bold text-center ${playfair.className} `}>Your Frequently Asked Questions</p>
        <span className={` md:text-lg my-4 text-center mb-8 ${dmSans.className}`}>Book your appointment today and  experience <br /> dental care designed around you.</span>
        <div className=" flex flex-col justify-center items-center space-y-2 my-8 text-sm">
          <div className="collapse collapse-plus  rounded-2xl outline-gray-300 outline w-full md:w-[70%]">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">Do I need an appointment before visiting?</div>
            <div className="collapse-content text-sm">
              Yes. We recommend booking an appointment in advance to ensure availability and minimize waiting time. Walk-ins may be accommodated depending on the schedule.
            </div>
          </div>
          <div className="collapse collapse-plus  rounded-2xl outline-gray-300 outline w-full md:w-[70%]">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">What services does your clinic offer?</div>
            <div className="collapse-content text-sm">
              Our clinic provides general dentistry, including check-ups, cleanings, fillings, tooth extractions, and preventive care. Please contact us for a full list of services.
            </div>
          </div>
          <div className="collapse collapse-plus  rounded-2xl outline-gray-300 outline w-full md:w-[70%]">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">What are your clinic hours?</div>
            <div className="collapse-content text-sm">
              Our clinic is open on scheduled weekdays and selected weekends. Operating hours may vary, so we suggest checking our contact page or calling ahead before your visit.
            </div>
          </div>
          <div className="collapse collapse-plus  rounded-2xl outline-gray-300 outline w-full md:w-[70%]">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">Do you accept dental insurance ?</div>
            <div className="collapse-content text-sm">
              Yes. We accept selected dental insurance providers and offer flexible payment options. Our staff will be happy to assist you with insurance and billing inquiries.
            </div>
          </div>
          <div className="collapse collapse-plus rounded-2xl outline-gray-300 outline w-full md:w-[70%]">
            <input type="checkbox" />
            <div className="collapse-title font-semibold">Is your clinic safe and hygienic?</div>
            <div className="collapse-content text-sm">
              Absolutely. We follow strict sterilization and infection-control protocols to ensure a clean, safe, and comfortable environment for every patient.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
