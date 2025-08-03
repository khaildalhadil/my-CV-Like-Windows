import { useRef, useState } from "react";
import { FaRegSquareMinus, FaRegSquarePlus } from "react-icons/fa6";
import { setNewOffset } from "../utils/NewOffSet";

//setShowMyProject
export default function MyProject({setShowMyProject, showMyProject, botMyProjectAbove, myProjectRef}) {

  const [positionOfMouse, setPositionOfMouse] = useState({x: 120, y: 210});
  
  

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

    const newPosition = setNewOffset(myProjectRef.current, mouseMoveDir);

    setPositionOfMouse(newPosition)

  }

  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }
  return (
    <div 
      onMouseDown={botMyProjectAbove}
      ref={myProjectRef}
      style={{
        left: positionOfMouse.x+`px`,
        top: positionOfMouse.y+`px`
      }}
      className='bg-white rounded w-2/4 h-[500px] absolute z-10 text-gray-600 overflow-y-scroll shadow-sm' >

      <div onMouseDown={mouseDown} className=" bg-[#f3f4f6]/70 p-2 cursor-grabbing rounded-t flex justify-between text-2xl fixed w-1/2">

        <span></span>

        <div className="flex gap-2 items-cente">
          <img src="./project.png" className="h-10" alt="my project icon" />
          <p className="font-bold ">my Project</p>
        </div>

        <div className="flex gap-2 pt-1" >
          <FaRegSquareMinus onClick={() => setShowMyProject(!showMyProject)} className=" cursor-pointer" />
          <FaRegSquarePlus  onClick={() => setShowMyProject(!showMyProject)} className=" cursor-pointer"/>
        </div>

      </div>

      <div className="grid grid-cols-3 mt-12">

        <div className="p-4 col-span-2 ">
          <h1 className="text-7xl font-bold">Hello I Will Add Them Later</h1>
        </div>
        
      </div>
    </div>
  )
}
