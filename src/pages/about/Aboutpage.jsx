import React, { useRef } from 'react'
import { motion } from "framer-motion";
import slider1 from '../../assets/images/slider1.jpg'
import slider2 from '../../assets/images/slider2.jpg'
import slider3 from '../../assets/images/slider3.jpg'
import slider4 from '../../assets/images/slider4.jpg'
import slider5 from '../../assets/images/slider5.jpg'
import slider6 from '../../assets/images/slider6.jpg'
import slider7 from '../../assets/images/About2.jpeg'
import slider8 from '../../assets/images/About4.jpeg'
import slider9 from '../../assets/images/About7.jpeg'
import slider10 from '../../assets/images/Gallery6.jpeg'

const images = [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9, slider10];

const Aboutpage = () => {
    const containerRef = useRef(null);
    const duplicatedImages = [...images, ...images, ...images];

    // Function to determine image size based on index for zig-zag pattern
    const getImageSize = (index) => {
        const sizes = [
            'w-40 h-56',   // Small
            'w-60 h-72',   // Medium
            'w-72 h-80',   // Large
            'w-52 h-60',   // Medium-small
            'w-60 h-72',   // Medium-large
        ];
        return sizes[index % sizes.length];
    }

    // Function to determine vertical offset for zig-zag effect
    const getVerticalOffset = (index) => {
        const offsets = ['mt-8', 'mt-0', 'mt-12', 'mt-4', 'mt-16'];
        return offsets[index % offsets.length];
    }

    return (
        <>
            <div className='min-h-screen w-full md:py-16 py-10 bg-[#2f6b67] relative overflow-hidden'>
 
                
                <div className='flex flex-col gap-8 relative z-10'>
                    {/* Header Section */}
                    <div className='text-center'>
                        <h2 className='text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6'
                        >
                            Stories for <span className='text-[#ffd700]'>Change</span>
                        </h2>
                    </div>

                    {/* About Section */}
                    <div className='main-container'>
                        <h2 className='text-3xl md:text-5xl font-bold text-white mb-8'
                        >
                            About <span className='text-[#ffd700]'>Us</span>
                        </h2>
                        
                        <div
                            className='max-w-3xl'
                        >
                            <p className='text-lg md:text-xl text-white/90 leading-relaxed mb-6 text-justify'>
                            Stories for Change is a global video and digital media project created by and
                           for the Giving for Change Alliance and the wider #ShiftThePower movement.
                            It celebrates community philanthropy, documents lived experiences of people
                             building change from the ground up, and amplifies voices often left out of
                              dominant development narratives.
                            </p>
                        </div>
                    </div>

                    {/* Enhanced Gallery Section */}
                    <div className='relative w-full overflow-hidden'>
                        

                        {/* Second row moving in opposite direction */}
                        <motion.div
                            className='flex gap-6 md:gap-8 mt-8'
                            initial={{ x: 0 }}
                            animate={{ 
                                x: [`-${(images.length * 100) / 3}%`, '0%'] 
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 70,
                                ease: "linear",
                            }}
                        >
                            {duplicatedImages.map((img, index) => (
                                <motion.div
                                    key={`gallery-img-second-${index}`}
                                    className={`flex-shrink-0 ${getImageSize((index + 2) % 5)} ${getVerticalOffset((index + 1) % 5)}`}
                                    whileHover={{ 
                                        scale: 1.08,
                                        rotate: index % 2 === 0 ? -2 : 2,
                                        transition: { duration: 0.3 } 
                                    }}
                                >
                                    <img 
                                        src={img} 
                                        className={`w-full h-full object-cover rounded-2xl shadow-2xl cursor-pointer ${
                                            index % 2 === 0 ? 'rotate-0' : 'rotate-0'
                                        } transition-all duration-300`}
                                        alt="Gallery image" 
                                        loading="lazy"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Aboutpage