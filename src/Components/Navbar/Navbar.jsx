import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
const Navbar = () => {
    return (
        <section className='w-[95%] mx-10 flex justify-between bg-red-100 p-3'>
            <div className='flex-col flex justify-center items-center'>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b66bc416af0876b82bdf381484c40f3137e3317d2c4d1fe9e32da3d312e10c54?apiKey=8478572201cf4b3f8647adfe69018175&"
                    className="aspect-[0.77] object-contain object-center w-[50px] overflow-hidden shrink-0 max-w-full"
                    alt=""
                />
            </div>
            <div className='flex justify-center items-center sm:hidden'>
                <nav>
                    <ul className='flex gap-5 justify-center items-center font-bold text-2xl mr-10'>
                        <li className='cursor-pointer'><a href="#a">Home</a></li>
                        <li><a href="#a">Puja</a></li>
                        <li><a href="#a">Services</a></li>
                        <li><a href="#a">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className='flex justify-center items-center px-3 text-2xl max-sm:block'>
                <GiHamburgerMenu />
            </div>
        </section>
    )
}

export default Navbar