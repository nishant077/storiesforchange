import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText);

const IntroSection = () => {

  const aboutRef = useRef(null);

  useGSAP(() => {
    // Text fade effect
    SplitText.create(".about-text", {
      type: "lines, chars",
      onSplit(self) {
        gsap.set(self.chars, { opacity: 0.25 }); // set initial opacity

        gsap.to(self.chars, {
          opacity: 1,
          stagger: 0.05,
          delay: 5,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1
          },
        });
      },
    });
  }, { scope: aboutRef });

  return (
    <>
      <div ref={aboutRef} className='main-container h-screen rounded-tl-[60px] rounded-tr-[60px] relative z-10'>

        <div className='flex flex-col gap-5  '>
        
          <div className='about-text py-8 lg:py-16 h-full flex justify-center items-center font-medium text-black text-2xl md:text-3xl xl:text-[40px] 2xl:text-5xl leading-[1.25]'>
         
            Stories for Change is a global video and digital media project created by and
for the Giving for Change Alliance and the wider #ShiftThePower movement.
It celebrates community philanthropy, documents lived experiences of people
building change from the ground up, and amplifies voices often left out of
dominant development narratives.

</div>
      </div>
    <div className="flex items-center group cursor-pointer">
                <button className="bg-white p-4 font-bold text-sm text-black rounded-full transition-all duration-300 group-hover:pr-6">
                  About Us 
                </button>
                <div className="p-4 bg-white rounded-full relative flex justify-center items-center -ml-1 transition-all duration-300 group-hover:ml-2">
                  <div className="transition-all duration-300 transform group-hover:translate-x-1">
                    <FaArrowRight color="black" />
                  </div>
                </div>
              </div>

      </div>
      
    </>
  )
}

export default IntroSection