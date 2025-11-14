import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import exhibition from '../../assets/Exhibition.mp4'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    if (videoContainerRef.current && contentRef.current) {
      
      // Set transform origin to top center so scaling happens from top
      gsap.set(videoContainerRef.current, { transformOrigin: "100% 0%" });
   
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoContainerRef.current,
          start: "top bottom", 
          end: "top top", 
          scrub: true, 
          markers: false,
        }
      });

      tl.from(videoContainerRef.current, {
        width: "20%",
        height: "20%",
        paddingTop: "5%",
        paddingBottom: "5%"
      });

      tl.to(videoContainerRef.current, {
        width: "100%",
        height: "60%",
        duration: 1,
        ease: "power2.out"
      });

    }
  }, []);

  return (
    <>
      <div className='main-container min-h-screen w-full bg-[#F2B93F] md:py-10 py-5'>
        <div ref={contentRef} className='flex flex-col items-center gap-5'> 
          <div className='text-center'>
            <h2 className='text-6xl font-bold text-black'>Stories for change</h2>
          </div>
          <div className='flex items-center justify-center'>
            <div className='border-16 bg-white border-black min-w-80 min-h-80 rounded-full flex justify-center items-center'>
            </div>
          </div>
          <div className="flex items-center group cursor-pointer">
            <button className="bg-white p-4 font-bold text-sm text-black rounded-full transition-all duration-300 group-hover:pr-6">
              Start your Journey
            </button>
            <div className="p-4 bg-white rounded-full relative flex justify-center items-center -ml-1 transition-all duration-300 group-hover:ml-2">
              <div className="transition-all duration-300 transform group-hover:translate-x-1">
                <FaArrowRight color="black" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Added positioning to ensure video stays at bottom */}
        <div className='relative w-full'>
          <div ref={videoContainerRef} className='max-w-[20%] max-h-[20%] py-5 relative'>
            <video ref={videoRef} loop muted autoPlay src={exhibition} className='rounded-lg object-cover w-full h-full'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero