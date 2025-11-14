import React, { useEffect, useState } from "react";

const EyeAnimation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;

      const maxMovement = 25;
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2) || 1;
      const clampedX = (deltaX / distance) * maxMovement;
      const clampedY = (deltaY / distance) * maxMovement;

      setPosition({ x: clampedX, y: clampedY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="eyes relative z-10  w-full h-screen overflow-hidden bg-[#C2F84F] flex items-center justify-center text-zinc-900">
      {/* Left Caption */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-left">
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide leading-snug">
          Join the<br />Virtual Gallery
        </h2>
        <p className="text-sm md:text-lg font-medium mt-2 opacity-80 max-w-[220px]">
          Explore creative stories told by communities shaping real change.
        </p>
      </div>

      {/* Eyes Section */}
      <div className="flex gap-10 items-center justify-center">
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 shadow-xl"
          >
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
              <div
                className="absolute w-10 h-10 rounded-full bg-zinc-100 transition-transform duration-75 ease-linear"
                style={{
                  transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
                  top: "50%",
                  left: "50%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Caption */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-right">
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wide leading-snug">
          Watch Stories<br />That Inspire
        </h2>
        <p className="text-sm md:text-lg font-medium mt-2 opacity-80 max-w-[220px] ml-auto">
          Step into the world of storytellers redefining community and change.
        </p>
      </div>
    </div>
  );
};

export default EyeAnimation;
