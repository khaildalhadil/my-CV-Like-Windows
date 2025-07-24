import { useRef, useState } from "react";
import { setNewOffset } from "../utils/NewOffSet";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";



export default function Skills({showMySkills, setShowMySkills, botSkillAbove, skillsRef}) {

  const [positionOfMouse, setPositionOfMouse] = useState({x: 600, y: 300});
  

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

    const newPosition = setNewOffset(skillsRef.current, mouseMoveDir);

    setPositionOfMouse(newPosition)

  }

  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }
  return (
    <div 
      onMouseDown={botSkillAbove}
      ref={skillsRef}
      // onClick={()=> alert("skills")}
      style={{
        left: positionOfMouse.x+`px`,
        top: positionOfMouse.y+`px`
      }}
      className='bg-white rounded w-2/4 h-[500px] absolute text-gray-600 shadow-sm' >

      <div onMouseDown={mouseDown} className=" bg-[#f3f4f6]/70 p-2 cursor-grabbing rounded-t flex justify-between text-2xl fixed w-1/2">

        <span></span>

        <div className="flex gap-2 items-cente">
          <GiSkills className="m-1" />
          <p className="font-bold ">Skills</p>
        </div>

        <div className="flex gap-2 pt-1" >
          <FaRegSquareMinus onClick={() => setShowMySkills(!showMySkills)} className=" cursor-pointer" />
          <FaRegSquarePlus  onClick={() => setShowMySkills(!showMySkills)} className=" cursor-pointer"/>
        </div>

      </div>

      <div className="mt-10 p-10 ">

        <p className="font-main text-2xl" >These are the tools I Learn them these 3 years, but I'm always happy to explore new ones.</p>

        <div className=" grid grid-cols-2">
          <div className=" flex flex-col gap-4">

            <div className="flex items-center gap-2 mt-3" >
              <img className="h-10" src="React.svg" alt="" />
              <span className="text-lg font-bold" >React</span>
            </div>

            <div className="flex items-center gap-2 mt-3" >
              <img className="h-10" src="Three.js.svg" alt="" />
              <span className="text-lg font-bold" >Three</span>
            </div>

            <div className="flex items-center gap-2 mt-3" >
              <img className="h-10" src="gsap-greensock.svg" alt="" />
              <span className="text-lg font-bold" >GSAP</span>
            </div>

            <div className="flex items-center gap-2 mt-3" >
              <img className="h-10" src="MongoDB.svg" alt="" />
              <span className="text-lg font-bold" >MongoDb</span>
            </div>

            <div className="flex items-center gap-2 mt-3" >
              <img className="h-10" src="Tailwind CSS.svg" alt="" />
              <span className="text-lg font-bold" >Tailwind CSS</span>
            </div>

          </div>

          <div className=" flex flex-col gap-4">

            <div className="flex items-center gap-2 mt-3" >
              <img className="h-10" src="Node.js.svg" alt="" />
              <span className="text-lg font-bold" >Node.js </span>
            </div>

            <div className="flex items-center gap-2 mt-3" >
              <img className="h-10" src="Java.svg" alt="" />
              <span className="text-lg font-bold" >Java</span>
            </div>

            <div className="flex items-center gap-2 mt-3" >
              <img className="h-10" src="GitHub.svg" alt="" />
              <span className="text-lg font-bold" >GitHub</span>
            </div>

            <div className="flex items-center gap-2 mt-3" >
              <img className="h-10" src="Git.svg" alt="" />
              <span className="text-lg font-bold" >Git</span>
            </div>


            <div className="flex items-center gap-2 mt-3" >
              <img className="h-10" src="Bootstrap.svg" alt="" />
              <span className="text-lg font-bold" >Bootstrap CSS</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
