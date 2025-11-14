import React from 'react'
import CurvedLoop from '../../components/CurvedLooped'

const Marquee = () => {
  return (
   <>
    {/* <CurvedLoop marqueeText="Welcome to Stories for Change ✦" /> */}

<CurvedLoop 
  marqueeText="Empower ✦ Creative ✦ Inspire ✦ Create ✦"
  speed={3}
  curveAmount={200}
  direction="right"
  interactive={true}
  className="custom-text-style"
/>

{/* <CurvedLoop 
  marqueeText="Smooth Curved Animation"
  speed={1}
  curveAmount={300}
  interactive={false}
/> */}
   </>
  )
}

export default Marquee