
import React, { useState } from 'react';
import FAQS from "./FAQ_Question.json";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const Questions = FAQS.Questions

  const handleOpen = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="FAQ bg-pink-100 flex w-[95%] mx-10 flex-col items-center p-10 max-lg:mx-7 max-md:max-w-full max-md:mx-5 max-sm:mx-5 gap-5">
      <div className='flex justify-start w-[100%] font-bold text-4xl'>
        <h1>FAQ's</h1>
      </div>
      <div className='w-[100%] flex flex-col gap-5'>
        {Questions.map((ques, index) => (
          <div key={index}>
            <button type='button' className='w-[100%] flex flex-row shadow border-2  p-5 rounded justify-between text-md font-semibold gap-10' onClick={() => handleOpen(index)}>
              <p>{ques.question}</p>
              <p className='cursor-pointer'><FaChevronDown /></p>
            </button>
            <div>
              {expandedIndex === index && <p className='relative top-2 rounded transition-all p-5 delay-150 ease-in-out border-2 border-white-500'>{ques.Answer}</p>}
            </div>


            
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
