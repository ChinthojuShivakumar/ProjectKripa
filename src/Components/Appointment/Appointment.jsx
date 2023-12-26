import React from 'react'

const Appointment = () => {
  return (
    <section>
        <div className="bg-orange-100 flex w-[95%] mx-10  flex-col justify-center items-center max-md:max-w-full max-md:mt-10 max-md:px-5 max-sm:m-5">
        <div className="w-[100%] flex items-center justify-center max-md:max-w-full max-md:my-10">
          <div className="gap-5 flex w-[100%] justify-center items-center max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col w-[100%]  max-sm:mt-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="flex justify-center items-center text-orange-600 text-2xl font-bold uppercase max-md:max-w-full">
                  Appointment
                </div>
                <div className="flex justify-center items-center text-black text-4xl font-bold  uppercase max-md:max-w-full max-md:text-4xl max-md:leading-[63px]">
                  LET’S CONTACT
                </div>
                <div className='w-[100%] p-5 flex justify-center items-center'>
                  <form className='flex flex-col justify-center items-center w-[75%] gap-5 p-10 max-sm:w-[100%]'>
                    <div className="flex justify-start items-start flex-col ">
                      <label className=" text-black mx-1 font-bold ">First Name: </label>
                      <input className='border border-[#910033] focus:outline-[#910033] border-2 rounded-lg p-3' type="text" name="firstname" id="firstname" />
                    </div>
                    <div className="flex justify-start items-start flex-col">
                      <label className="w-full  text-black mx-1 font-bold ">Last Name: </label>
                      <input className='border border-[#910033] focus:outline-[#910033] border-2 rounded-lg p-3' type="text" name="lastname" id="lastname" />
                    </div>
                    <div className="flex justify-start items-start flex-col">
                      <label className="w-full  text-black mx-1 font-bold ">Your Phone: </label>
                      <input className='border border-[#910033] focus:outline-[#910033] border-2 rounded-lg p-3' type="text" name="number" id="number" />
                    </div>
                    <div className="flex justify-start items-start flex-col">
                      <label className="w-full  text-black mx-1 font-bold ">Your Email: </label>
                      <input className='border border-[#910033] focus:outline-[#910033] border-2 rounded-lg p-3' type="email" name="email" id="email" />
                    </div>
                    <div className="flex justify-start items-start flex-col">
                      <label className="w-full  text-black mx-1 font-bold ">Services: </label>
                      <select className='border border-[#910033] focus:outline-[#910033] border-2 rounded-lg p-3' value="Services">
                        <option value="Services">Services</option>
                      </select>
                    </div>
                    <div className="flex justify-start items-start flex-col">
                      <label className="w-full  text-black mx-1 font-bold ">Date: </label>
                      <input className='border border-[#910033] focus:outline-[#910033] border-2 rounded-lg p-3' type="date" id="date" name="date" />
                    </div>
                    <div className="flex justify-center items-center">
                      <button className="bg-[#910033] border-2 rounded-lg px-6 py-1 w-48 text-white font-bold mr-10 mb-6 hover:scale-95 duration-300 hover:shadow-xl" type="submit">Contact now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Appointment