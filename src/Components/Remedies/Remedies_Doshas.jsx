import React from 'react'
import Items from "./Remedies.json"

const Remedies_Doshas = () => {

  const Item = Items.Item
  return (
    <section className="flex w-[95%] mx-10 justify-center items-center flex-col bg-green-200 max-lg:mx-7 max-md:max-w-full max-md:px-5 max-sm:mx-5">

      <div className="flex mt-5 w-full max-w-[100%] flex-col max-md:max-w-full max-md:my-10">
        <h1 className="flex justify-center items-center text-orange-500 text-4xl font-semibold uppercase max-md:max-w-full max-md:text-3xl">
          Remedy Pujas / Dosha Pujas
        </h1>
      </div>

      <div className='my-5'>
        {Item.map((item, index) => {
          return (
            <div key={index} className='grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-bold'>
              <div className=''>
                <div className='flex justify-center items-center'>
                  <img className='object-cover object-center w-[100%]' src={item.image} alt={item.title} />
                </div>
                <div className='flex justify-center items-center flex-col gap-3 m-2'>
                  <h1 className='text-2xl'>{item.title}</h1>
                  <p className='text-md'>{item.description}</p>
                  <div className='flex justify-between w-[100%]'>
                    <p>{item.from}</p>
                    <span>{item.cost}</span>
                    <span>{item.perPerson}</span>
                  </div>
                  <button className='w-[100%] bg-orange-500 p-2 text-white rounded'>{item.button}</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default Remedies_Doshas