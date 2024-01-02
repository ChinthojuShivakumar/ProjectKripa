import React from 'react'

const Header = () => {
  return (
    <section className='w-[95%] bg-red-100 mx-10 mt-4 flex justify-center items-center divide-y-8 max-lg:mx-7 max-md:mx-5 max-sm:mx-5'>
        <div className='flex justify-center items-center w-[20%] p-5 focus:outline-none max-md:max-w-full max-sm:w-[50%]'>
            <select className='w-[80%] px-3 py-2 rounded '>
                <option value="Spanish" disabled>Spanish</option>
                <option value="English">English</option>
            </select>
        </div>
    </section>
  )
}

export default Header