import { useRef, useState } from "react";
import { setNewOffset } from "../utils/NewOffSet";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegSquareMinus } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";


export default function AboutMe({showMyInfo, setShowMyInfo, aboutRef, botAboutAbove}) {

  const [positionOfMouse, setPositionOfMouse] = useState({x: 100, y: 100});
  

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
  return (
    <div 
      onMouseDown={botAboutAbove}
      ref={aboutRef}
      style={{
        left: positionOfMouse.x+`px`,
        top: positionOfMouse.y+`px`
      }}
      className='bg-white rounded w-2/4 h-[500px] relative text-gray-600 overflow-y-scroll shadow-sm' >

      <div onMouseDown={mouseDown} className=" bg-[#f3f4f6]/70 p-2 cursor-grabbing rounded-t flex justify-between text-2xl fixed w-1/2">

        <span></span>

        <div className="flex gap-2 items-cente">
          <FaAddressCard className="m-1" />
          <p className="font-bold ">About Me</p>
        </div>

        <div className="flex gap-2 pt-1" >
          <FaRegSquareMinus onClick={() => setShowMyInfo(!showMyInfo)} className=" cursor-pointer" />
          <FaRegSquarePlus  onClick={() => setShowMyInfo(!showMyInfo)} className=" cursor-pointer"/>
        </div>

      </div>

      <div className="grid grid-cols-3 mt-12">

        <div className="p-4 col-span-2 ">
          <h1 className="text-7xl font-bold">Khalid Alhadi</h1>
          <h2 className="text-4xl">Software Engineer</h2>
          <p className="mt-7 text-2xl  ml-1 font-main">Hello Wolrd, I'm Khalid Alhadi From Oman Lorem ipsum dolor sit amet consectetur adipisici Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, illum.</p>
          <p className="mt-7 text-2xl  ml-1 font-main">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, consequuntur quaerat aliquid iste libero voluptatum eaque vero! Esse quod quisquam illo! Nesciunt veniam hic doloremque aut sunt labore non, laudantium nobis, fugiat quaerat debitis eius perspiciatis sapiente nihil alias voluptatibus tenetur quod, aperiam magnam praesentium. Delectus recusandae temporibus a omnis magni voluptate cupiditate, ex veritatis eius accusamus incidunt quas voluptatem quis beatae itaque dolore voluptatum numquam hic nostrum dolor corrupti totam repellendus. Placeat vel nam iste sit repudiandae fuga. Hic eaque nisi sunt. Quibusdam culpa ipsa, ex, soluta ad laborum quo beatae dolorum ipsum aut perferendis quod doloribus asperiores suscipit?</p>
        </div>
        
        <div className="col-start-3 p-3 pr-6" >
          <img 
            className=" rounded-2xl"
            src="myImg.png" alt="" />
        </div>

      </div>
    </div>
  )
}
