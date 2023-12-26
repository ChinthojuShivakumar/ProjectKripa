import * as React from "react";
import FAQ from "./Components/FAQ/FAQ's";
import Footer from "./Components/Footer/Footer";
import Ourblog from "./Components/OurBlog/Ourblog";
import Appointment from "./Components/Appointment/Appointment";
import OurClientsHapp from "./Components/OurClinetsHappy/OurClientsHapp";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import RemediesDoshas from "./Components/Remedies/Remedies_Doshas";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";

function MyComponent() {
  return (
    // <div className="bg-white flex flex-col m-3 max-sm:m-2">
    //   <div className="flex-col flex justify-center items-center w-[100%] pb-12 max-md:max-w-full">
    //     <img
    //       loading="lazy"
    //       srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8d260d129a5598b5a56822744c092317f160efc00c2af362833612e3b4aea54e?apiKey=8478572201cf4b3f8647adfe69018175&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d260d129a5598b5a56822744c092317f160efc00c2af362833612e3b4aea54e?apiKey=8478572201cf4b3f8647adfe69018175&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d260d129a5598b5a56822744c092317f160efc00c2af362833612e3b4aea54e?apiKey=8478572201cf4b3f8647adfe69018175&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d260d129a5598b5a56822744c092317f160efc00c2af362833612e3b4aea54e?apiKey=8478572201cf4b3f8647adfe69018175&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d260d129a5598b5a56822744c092317f160efc00c2af362833612e3b4aea54e?apiKey=8478572201cf4b3f8647adfe69018175&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d260d129a5598b5a56822744c092317f160efc00c2af362833612e3b4aea54e?apiKey=8478572201cf4b3f8647adfe69018175&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d260d129a5598b5a56822744c092317f160efc00c2af362833612e3b4aea54e?apiKey=8478572201cf4b3f8647adfe69018175&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8d260d129a5598b5a56822744c092317f160efc00c2af362833612e3b4aea54e?apiKey=8478572201cf4b3f8647adfe69018175&"
    //       className="absolute h-[50%] w-full object-cover object-center inset-0"
    //       alt=""
    //     />
    //     <div className="flex-col flex w-[95%] mx-10 justify-center items-center max-md:max-w-full max-sm: mx-5">
    //       {/* Background imgae */}
    //       <div className="relative bg-red-100 bg-opacity-90 flex w-[100%] flex-col max-md:max-w-full">
    //         <div className="items-stretch border bg-white flex w-[168px] max-w-full justify-between gap-5 mr-64 px-3.5 py-3 rounded-lg border-solid border-orange-600 self-end max-md:mr-2.5">
    //           <div className="text-black text-base font-medium">English</div>
    //           <img
    //             loading="lazy"
    //             src="https://cdn.builder.io/api/v1/image/assets/TEMP/30a1806a82441b7b722068102cd7f7e7ede2759f6ff9da620fcf6bd15b818b41?apiKey=8478572201cf4b3f8647adfe69018175&"
    //             className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
    //             alt=""
    //           />
    //         </div>
    //         <div className="items-center bg-white bg-opacity-30 self-stretch flex w-[100%] flex-col justify-center mt-4 px-4 max-md:max-w-full max-md:px-5">
    //           <div className="justify-between flex w-[100%] gap-5 max-md:max-w-full max-md:flex-wrap">
    //             <img
    //               loading="lazy"
    //               src="https://cdn.builder.io/api/v1/image/assets/TEMP/b66bc416af0876b82bdf381484c40f3137e3317d2c4d1fe9e32da3d312e10c54?apiKey=8478572201cf4b3f8647adfe69018175&"
    //               className="aspect-[0.77] object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
    //               alt=""
    //             />
    //             <div className="items-center flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
    //               <div className="text-black text-xl font-bold uppercase">
    //                 Home
    //               </div>
    //               <div className="text-black text-xl font-bold uppercase">
    //                 Puja
    //               </div>
    //               <div className="text-black text-xl font-bold uppercase">
    //                 Services
    //               </div>
    //               <div className="text-black text-xl font-bold uppercase">
    //                 Contact Us
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>




       
        
      
    // </div>
    //  </div> 
    <>
   
      <Header />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <RemediesDoshas />
      <WhyChoose />
      <OurClientsHapp />
      <Appointment />
      <Ourblog />
      <FAQ />
      <Footer />
    </>
  );
}

export default MyComponent



