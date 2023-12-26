import React from 'react'

const WhyChoose = () => {
  return (
    <section>
        
      <div className="flex justify-center items-center m-10 w-[95%] flex-col max-sm: m-5">
      <div className="flex justify-center items-center flex-col">
      <div className="text-orange-600  text-2xl font-bold uppercase  mt-5 max-md:mt-10">
        WHY?
      </div>
      <div className="text-black text-8xl font-bold uppercase  max-md:max-w-full max-md:text-4xl">
        WHY CHOOSE Dev kirpa
      </div>
      </div>
      <div className="flex justify-center items-center w-[100%] mt-10 p-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex w-[100%] justify-center gap-10 items-center max-md:w-full max-md:ml-0 max-sm:flex-col">
            <div className="flex justify-center items-center flex-col max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/de75ef96021cc73f2e30ed436d8c73b431270172def85655cd4be51ae9903915?apiKey=8478572201cf4b3f8647adfe69018175&"
                className="aspect-square object-contain mt-3 object-center w-[150px] overflow-hidden self-center max-w-full"
                alt=""
              />
              <div className="text-orange-600 text-3xl font-bold uppercase self-center whitespace-nowrap mt-8">
                Great Experience
              </div>
              <div className="text-zinc-800 text-center text-lg mt-8">
                Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur
                sed tellus ut vehicula eu consec.
              </div>
            </div>

            <div className="flex justify-center items-center flex-col max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cc623a2aa98f6338939d5b52752138627ba0b5d3f8a9ebbc2847463608b31ab?apiKey=8478572201cf4b3f8647adfe69018175&"
                className="aspect-square object-contain  mt-3 object-center w-[150px] overflow-hidden self-center max-w-full"
                alt=""
              />
              <div className="text-orange-600 text-3xl font-bold uppercase self-center whitespace-nowrap mt-8">
                Data Privacy{" "}
              </div>
              <div className="text-zinc-800 text-center text-lg mt-8">
                Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur
                sed tellus ut vehicula eu consec.
              </div>
            </div>

            <div className="flex justify-center items-center flex-col max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c38e9f17747e75f2cfb4e03334593236cb614bf3d6704b4b64b87005a2debcad?apiKey=8478572201cf4b3f8647adfe69018175&"
                className="aspect-square object-contain  mt-3 object-center w-[150px] overflow-hidden self-center max-w-full"
                alt=""
              />
              <div className="text-orange-600 text-3xl font-bold uppercase self-center whitespace-nowrap mt-8">
                Best Customer Support
              </div>
              <div className="text-zinc-800 text-center text-lg mt-8">
                Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur
                sed tellus ut vehicula eu consec.
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  )
}

export default WhyChoose