
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
    <section className="FAQ bg-pink-100 flex w-[95%] m-10 flex-col items-center p-10 max-md:max-w-full max-md:px-5 max-sm:m-5 gap-5">
      <div className='flex justify-start w-[100%] font-bold text-4xl'>
        <h1>FAQ's</h1>
      </div>
      <div className='w-[100%] flex flex-col gap-5'>
        {Questions.map((ques, index) => (
          <div key={index}>
            <button type='button' className='w-[100%] flex flex-row justify-between text-md font-semibold gap-10' onClick={() => handleOpen(index)}>
              <p>{ques.question}</p>
              <p className='cursor-pointer'><FaChevronDown /></p>
            </button>
            <div>
              {expandedIndex === index && <p className='relative transition-all delay-75 ease-in-out border-2 border-gray-500'>{ques.Answer}</p>}
            </div>


            {/* <div class="relative mb-3">
              <h6 class="mb-0">
                <button
                  class="relative justify-between flex items-center w-full p-4 font-semibold text-left transition-all transition-0.5s ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                  data-collapse-target="collapse-1"
                  onClick={() => handleOpen(index)}
                >
                  <span>{ques.question}</span>
                  <FaChevronDown />
                </button>
              </h6>
              <div
                data-collapse="collapse-1"
                class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
              >
                <div class="p-4 mt-5 border-grey-700  text-sm leading-normal text-blue-gray-500/80">
                  {expandedIndex === index && <p>{ques.Answer}</p>}
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
