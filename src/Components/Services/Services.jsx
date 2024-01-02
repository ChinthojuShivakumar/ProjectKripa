import React from 'react'
import Service from "./Service.json"

const Services = () => {

  const Item = Service.Items
  return (
    <section className="bg-pink-500 mx-10 flex justify-center flex-col items-center w-[95%] max-lg:mx-7 max-md:mx-5 max-sm:mx-5">

      <div className="flex justify-center items-center flex-col w-[100%]">
        <h1 className="flex justify-center w-[100%] items-center text-red-700 text-center text-6xl font-bold uppercase self-center whitespace-nowrap p-5 max-md:mt-10 max-sm:text-5xl">
          SERVICES
        </h1>
        <p className=" flex justify-center w-[100%] items-center text-black text-center text-2xl font-bold uppercase max-md:max-w-full max-md:text-4xl max-md:mb-10 max-sm:text-base">
          TYPEs oF Puja
          we offer
        </p>
      </div>
      <div className="gap-5 flex flex-wrap justify-center items-center  items-center w-[100%] m-3">

        {
          Item.map((item, index) => {
            return (
              <div key={index} className="w-full flex justify-evenly items-center md:w-1/2 lg:w-1/4 p-3 max-sm:flex-col max-sm:justify-center max-sm:items-center">
                <div className="flex flex-col w-[100%] bg-green-100 pt-6 pb-8 px-8 rounded border-2 border-solid border-red max-md:max-w-full max-md:mt-10 max-md:px-5 max-sm:w-[75%]">
                  <img
                    loading="lazy"
                    srcSet={item.image}
                    className="object-cover object-center w-[100%] overflow-hidden max-md:max-w-full"
                    alt={item.title}
                  />
                  <h3 className="text-black text-2xl font-bold uppercase mt-6 max-md:max-w-full max-md:mt-10">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-lg font-light mt-2 max-md:max-w-full">
                    {item.description}
                  </p>
                  <button className=" flex text-white rounded hover:bg-orange-400 text-2xl font-semibold whitespace-nowrap justify-center items-center bg-orange-600 mt-3 px-5 py-2 max-md:max-w-full max-md:px-5">
                    {item.button}
                  </button>
                </div>


              </div>
            )
          })
        }

      </div>

    </section>
  )
}

export default Services