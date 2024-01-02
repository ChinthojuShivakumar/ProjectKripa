import React from 'react'

const Hero = () => {
    return (
        <section className='bg-pink-200 w-[95%] mx-10 flex justify-center items-center flex-col max-lg:mx-7 max-md:mx-5 max-sm:mx-5'>
            <div className="text-orange-600  text-center flex-col text-5xl p-10 font-bold  w-[100%] mt-5 max-md:max-w-full max-md:text-4xl       max-md:leading-[55px] max-md:mt-10 max-sm:w-[100%]">
                <p className="">VIRTUAL PUJA EXPERIECE BY </p>
                <p className="text-orange-600">DEV KIRPA</p>
            </div>

            <div className="text-black text-center text-lg self-center max-w-[906px] mt-14 max-md:max-w-full max-md:mt-10">
              Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur sed
              tellus ut vehicula eu consectetur elit at. Nulla erat nunc nisl
              dui sed cras semper vitae. odio ullamcorper non sed dignissim eu.
            </div>

            <button className="text-white text-2xl font-bold  justify-center items-center  hover:bg-orange-500 bg-orange-600 rounded w-[300px] max-w-full mt-14 mb-16 px-16 py-5 max-md:my-10 max-md:px-5">
              Get Started
            </button>
        </section>
    )
}

export default Hero