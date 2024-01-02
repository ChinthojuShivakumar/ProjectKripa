import React from 'react'

const About = () => {
  return (
    <section className="flex w-[95%] mx-10 py-5 bg-red-200 flex-col justify-center items-center max-lg:mx-7  max-md:max-w-full max-md:mx-5 max-sm:mx-5">

      <div className="flex max-w-[80%] flex-col  max-md:max-w-full max-md:my-10">
        <div className="flex justify-center items-center flex-col gap-10 items-start max-md:max-w-full max-md:flex-wrap">


          <div className="flex justify-center items-center  flex-col max-md:max-w-full">
            <h1 className="text-red-600 text-2xl font-bold text-5xl uppercase max-md:max-w-full max-sm:text-l">
              About
            </h1>
            <p className="text-black text-2xl font-bold uppercase mt-5 max-md:max-w-full max-md:text-4xl max-md:leading-[55px] max-sm:text-sm">
              Discover Everything Yourself WITH Dev kirpa
            </p>
          </div>

          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f6b35049badcae4cc2ca42a99336dd9c42795e59b1a833930e817e05150754c3?apiKey=8478572201cf4b3f8647adfe69018175&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6b35049badcae4cc2ca42a99336dd9c42795e59b1a833930e817e05150754c3?apiKey=8478572201cf4b3f8647adfe69018175&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6b35049badcae4cc2ca42a99336dd9c42795e59b1a833930e817e05150754c3?apiKey=8478572201cf4b3f8647adfe69018175&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6b35049badcae4cc2ca42a99336dd9c42795e59b1a833930e817e05150754c3?apiKey=8478572201cf4b3f8647adfe69018175&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6b35049badcae4cc2ca42a99336dd9c42795e59b1a833930e817e05150754c3?apiKey=8478572201cf4b3f8647adfe69018175&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6b35049badcae4cc2ca42a99336dd9c42795e59b1a833930e817e05150754c3?apiKey=8478572201cf4b3f8647adfe69018175&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6b35049badcae4cc2ca42a99336dd9c42795e59b1a833930e817e05150754c3?apiKey=8478572201cf4b3f8647adfe69018175&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6b35049badcae4cc2ca42a99336dd9c42795e59b1a833930e817e05150754c3?apiKey=8478572201cf4b3f8647adfe69018175&"
            className="object-contain object-center w-full overflow-hidden max-w-[50%] grow basis-[0%] max-md:max-w-[50%]"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center flex-col gap-5 mt-28 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pr-5">
          <div className="text-white text-lg grow shrink basis-auto max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur
            sed tellus ut vehicula eu consectetur elit at. Nulla erat nunc
            nisl dui sed cras semper vitae. Tempor odio ullamcorper non sed
            dignissim eu.
          </div>
          <button className="text-white text-2xl font-bold rounded justify-center hover:bg-orange-400 bg-orange-600 px-16 py-6 max-md:px-5">
            Let’s get started
          </button>
        </div>
      </div>

    </section>
  )
}

export default About