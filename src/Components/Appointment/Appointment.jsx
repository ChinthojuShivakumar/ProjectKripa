import React from 'react'

const Appointment = () => {
  return (
    <section className="bg-orange-100 flex w-[95%] mx-10  flex-col justify-center items-center max-md:max-w-full max-lg:mx-7 max-md:mx-5 max-sm:mx-5">
      <div className="flex flex-col justify-center items-center p-5 w-[100%] max-md:max-w-full max-md:mt-10">
        <h1 className="flex justify-center items-center text-orange-600 text-2xl font-bold uppercase max-md:max-w-full">
          Appointment
        </h1>
        <p className="flex justify-center items-center text-black text-4xl font-bold  uppercase max-md:max-w-full max-md:text-4xl max-md:leading-[63px]">
          LET'S CONTACT
        </p>
      </div>
      <div className='w-[100%] p-5 flex justify-center items-center'>
        <form className='grid grid-cols-2 justify-center items-center w-[100%] gap-5 p-10 max-sm:w-[100%] max-sm:grid-cols-1'>
          <div className="flex flex-col justify-center items-start w-[100%] gap-3">
            <label className=" text-black mx-1 font-bold ">First Name: </label>
            <input className='border w-[50%] border-[#910033] focus:outline-[#910033] border-2 rounded-lg p-3  max-md:w-[75%] max-sm:w-[100%]' type="text" name="firstname" id="firstname" />
          </div>
          <div className="flex flex-col w-[100%] gap-3">
            <label className="w-full  text-black mx-1 font-bold ">Last Name: </label>
            <input className='border w-[50%] border-[#910033] focus:outline-[#910033] border-2 rounded-lg p-3 max-md:w-[75%] max-sm:w-[100%]' type="text" name="lastname" id="lastname" />
          </div>
          <div className="flex flex-col w-[100%] gap-3">
            <label className="w-full  text-black mx-1 font-bold ">Your Phone: </label>
            <input className='border w-[50%] border-[#910033] focus:outline-[#910033] border-2 rounded-lg p-3 max-md:w-[75%] max-sm:w-[100%]' type="text" name="number" id="number" />
          </div>
          <div className="flex flex-col w-[100%] gap-3">
            <label className="w-full  text-black mx-1 font-bold ">Your Email: </label>
            <input className='border w-[50%] border-[#910033] focus:outline-[#910033] border-2 rounded-lg p-3 max-md:w-[75%] max-sm:w-[100%]' type="email" name="email" id="email" />
          </div>
          <div className="flex flex-col w-[100%] gap-3">
            <label className="w-full  text-black mx-1 font-bold ">Services: </label>
            <select className='border w-[50%] border-[#910033] focus:outline-[#910033] border-2 rounded-lg p-3 max-md:w-[75%] max-sm:w-[100%]' value="Services">
              <option value="Services">Services</option>
            </select>
          </div>
          <div className="flex flex-col w-[100%] gap-3">
            <label className="w-full  text-black mx-1 font-bold ">Date: </label>
            <input className='border w-[50%] border-[#910033] focus:outline-[#910033] border-2 rounded-lg p-3 max-md:w-[75%] max-sm:w-[100%]' type="date" id="date" name="date" />
          </div>
          <div className="flex flex-col w-[100%] gap-3">
            <button className="bg-[#910033] w-[50%] border-2 rounded-lg px-6 py-1 w-48 text-white font-bold mr-10 mb-6 hover:scale-95 duration-300 hover:shadow-xl max-md:w-[75%] max-sm:w-[75%]" type="submit">Contact now</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Appointment