import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight } from "react-icons/fa";
import exhibition from '../../assets/Exhibition.mp4'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    if (videoContainerRef.current && contentRef.current) {
      
      // Set transform origin to top center for scaling from top
      gsap.set(videoContainerRef.current, { 
        transformOrigin: "50% 0%"
      });
   
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".main-container",
          start: "top top", 
          end: "+=800", // Reduced scroll distance for quicker completion
          scrub: 0.8, // Slightly slower scrub for smoother sync
          markers: false,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      // Get initial dimensions based on screen size
      const initialWidth = window.innerWidth >= 768 ? "20%" : "80%";
      const initialHeight = window.innerWidth >= 768 ? "20vh" : "25vh";
      const finalHeight = window.innerWidth >= 768 ? "80vh" : "60vh";

      // Video expansion animation - synchronized with content fade
      tl.fromTo(videoContainerRef.current, {
        width: initialWidth,
        height: initialHeight,
      }, {
        width: "100%",
        height: finalHeight,
        ease: "power2.inOut",
      }, 0);

      // Content fade out animation - all elements fade together
      if (contentRef.current) {
        // Fade out the entire content container
        tl.to(contentRef.current, {
          opacity: 0,
          y: -30,
          ease: "power2.in",
        }, 0);

        // Additional: You can also fade out individual elements with slight delays for staggered effect
        const contentChildren = contentRef.current.children;
        tl.to(contentChildren, {
          opacity: 0,
          y: -20,
          stagger: 0.1,
          ease: "power1.in",
        }, 0);
      }

    }
  }, []);

  return (
    <>
      <div className='main-container min-h-screen w-full bg-[#F2B93F] md:py-10 py-5 overflow-x-hidden relative'>
        <div 
          ref={contentRef} 
          className='flex flex-col items-center gap-5  transition-opacity'
        > 
          {/* Heading */}
          <div className='text-center'>
            <h2 className='text-4xl md:text-6xl font-bold text-black mb-4 md:mb-6'>
              Stories for change
            </h2>
          </div>
          
          {/* Circle */}
          <div className='flex items-center justify-center'>
            <div className='border-8 md:border-16 bg-white border-black w-48 h-48 md:min-w-80 md:min-h-80 rounded-full flex justify-center items-center'>
              {/* Optional: Add content inside circle if needed */}
            </div>
          </div>
          
          {/* Button */}
          <div className="flex items-center group cursor-pointer mt-4 md:mt-6">
            <button className="bg-white p-3 md:p-4 font-bold text-xs md:text-sm text-black rounded-full transition-all duration-300 group-hover:pr-5 md:group-hover:pr-6">
              Start your Journey
            </button>
            <div className="p-3 md:p-4 bg-white rounded-full relative flex justify-center items-center -ml-1 transition-all duration-300 group-hover:ml-1 md:group-hover:ml-2">
              <div className="transition-all duration-300 transform group-hover:translate-x-1">
                <FaArrowRight color="black" size={14} className="md:text-base" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Video Section */}
        <div className='relative w-full mt-5'>
          <div 
            ref={videoContainerRef} 
            className='w-[80%] h-[25vh] md:w-[20%] md:h-[20vh]'
            style={{ 
              transformOrigin: 'center top',
            }}
          >
            <video 
              ref={videoRef} 
              loop 
              muted 
              autoPlay 
              playsInline
              src={exhibition} 
              className='rounded-lg object-cover w-full h-full'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero