import { useRef, useState } from "react";
import { setNewOffset } from "../utils/NewOffSet";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";


export default function AboutMe({showMyInfo, setShowMyInfo, aboutRef, botAboutAbove}) {

  const [positionOfMouse, setPositionOfMouse] = useState({x: 150, y: 65});
  

  const mouseDown = (e) => {
      positionOfMouse.x = e.clientX;
      positionOfMouse.y = e.clientY;

      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", mouseUp);
  }

  const mouseMove = (e) => {
    
    const mouseMoveDir = {
      x: positionOfMouse.x - e.clientX,
      y: positionOfMouse.y - e.clientY
    }
    
    positionOfMouse.x = e.clientX
    positionOfMouse.y = e.clientY;

    const newPosition = setNewOffset(aboutRef.current, mouseMoveDir);

    setPositionOfMouse(newPosition)
  }

  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }

    function closeShowAbout() {
    setShowMyInfo(!showMyInfo)
    aboutRef.current.style.zIndex = 0;
  }
  return (
    <div 
      onMouseDown={botAboutAbove}
      ref={aboutRef}
      style={{
        left: positionOfMouse.x+`px`,
        top: positionOfMouse.y+`px`
      }}
      className='bg-white rounded w-6/10 h-[550px] relative text-gray-600 overflow-y-scroll shadow-2xl z-50' >

      <div onMouseDown={mouseDown} className=" bg-[#f3f4f6]/70 p-2 cursor-grabbing rounded-t flex justify-between text-2xl fixed w-6/10">

        <span></span>

        <div className="flex gap-2 items-cente ">
          <FaAddressCard className="m-1" />
          <p className="font-bold ">About Me</p>
        </div>

        <div className="flex gap-2 pt-1" >
          <FaRegSquareMinus onClick={() => closeShowAbout()} className=" cursor-pointer" />
          <FaRegSquarePlus  onClick={() => closeShowAbout()} className=" cursor-pointer"/>
        </div>

      </div>

      <div className="grid mt-12 grid-cols-[2fr_1.5fr]">

        <div className="p-4  ">
          <h1 className="text-5xl font-bold">Khalid Alhadi</h1>
          <h2 className="text-4xl">Software Engineer</h2>
          <p className="mt-7 text-2xl  ml-1 font-main">My name is Khalid Abdullah Alhadi, a 25-year-old Omani from Barka. I am passionate about programming and everything related to technology. I am currently pursuing a Bachelor's degree in Computer Science, and I am expected to graduate in 2026, which will be my final year.</p>
          <p className="mt-7 text-2xl  ml-1 font-main">I have 3 years of programming experience, having started in 2023. I enjoy studying because it helps me stay disciplined and organize my schedule effectively. I also love helping others — I run a YouTube channel called khalid_alhadi_101, where I create content to support students in programming and exam preparation.</p>
          <p className="mt-7 text-2xl  ml-1 font-main">Additionally, I regularly share what I learn on LinkedIn and Instagram to engage with the tech community and contribute to knowledge sharing.</p>
        </div>
        
        <div className="p-3 pr-6" >
          <img 
            className=" rounded-lg"
            src="myImg.png" alt="" />
        </div>

      </div>
    </div>
  )
}
