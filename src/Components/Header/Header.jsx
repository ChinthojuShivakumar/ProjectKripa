import React from 'react'

const Header = () => {
  return (
    <section className='w-[95%] bg-red-100 mx-10 mt-4 flex justify-center items-center '>
        <div className='flex justify-center items-center w-[100%] p-5 max-md:max-w-full'>
            <select className='w-[80%]  '>
                <option value="Spanish" disabled>Spanish</option>
                <option value="English">English</option>
            </select>
        </div>
    </section>
  )
}

export default Header