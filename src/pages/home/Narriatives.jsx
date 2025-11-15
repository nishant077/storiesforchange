import React from 'react'
import exhibition from '../../assets/Exhibition.mp4'

const Narriatives = () => {
  return (
    <>
      {/* Title Wrapper */}
      <div className="bg-[#F2B93F] text-black">
        <div className='main-container pb-5 lg:pb-12'>
          <h3>OUR Stories</h3>
        </div>
      </div>

      {/* Services List */}
      <div className='relative'>
        <div className="bg-[#2f6b67] text-white pt-16 lg:pt-20 pb-[5rem] sticky top-4">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
              
            {/* Left side */}
            <div className='flex flex-col gap-6 lg:gap-8'>
              {/* <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">01</span> */}
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
             Flim
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed">
              A future where communities drive their own change.
Development that shifts power, decentralises philanthropy, and
recognises local resources.
Storytelling that provokes reflection, challenges power, and inspires
action.
              </p>
            </div>

            {/* Right side */}
            <div className="flex items-center">
             <div  className='w-[90%] h-[90%] py-5'>
                         <video  loop muted autoPlay src={exhibition} className='rounded-lg object-cover w-full h-full'/>
                       </div>
            </div>

          </div>
        </div>
        <div className="bg-[#71b7f8] text-black pt-16 lg:pt-20 pb-[15rem] sticky top-1/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
              
            {/* Left side */}
            <div className='flex flex-col gap-6 lg:gap-8'>
              {/* <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">02</span> */}
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
              Blog
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed">
              Community philanthropy is real, flourishing and happening now.
It is more than charity; it is solidarity, rights-claiming, and mutual aid.
Everyone has a role to play: givers, doers, artists, activists, leaders,
and neighbours.
The time for these stories is NOW.
              </p>
            </div>

            {/* Right side */}
            <div className="flex items-center">
            <div  className='w-[90%] h-[90%] py-5'>
                         <video  loop muted autoPlay src={exhibition} className='rounded-lg object-cover w-full h-full'/>
                       </div>
            </div>

          </div>
        </div>
        <div className="bg-[#2b2b2b] text-white py-16 lg:py-20 sticky top-2/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
              
            {/* Left side */}
            <div className='flex flex-col gap-6 lg:gap-8'>
              {/* <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">03</span> */}
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-[1]">
                Event
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed">
              Let’s celebrate and share these stories to inspire, provoke, and build a
              movement for lasting change.
              </p>
            </div>

            {/* Right side */}
            <div className="flex items-center">
            <div  className='w-[90%] h-[90%] py-5'>
                         <video  loop muted autoPlay src={exhibition} className='rounded-lg object-cover w-full h-full'/>
                       </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Narriatives