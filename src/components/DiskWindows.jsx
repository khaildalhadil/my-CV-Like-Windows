import { RiShutDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


export default function DiskWindows({shutDown}) {
  

  return (
    <div className="h-2/3 w-2/6 bg-[#232323] absolute bottom-13  text-white grid grid-cols-8  text-2xl z-90 rounded-t shadow-sm " >
      <div className=" flex flex-col justify-between p-3 text-6xl "  >
          <FaBars className="p-3 hover:bg-gray-600 rounded cursor-pointer" />
        <div className="flex gap-9 flex-col text-6xl" >
          <a href="https://www.instagram.com/kk_lold/reels/?next=%2F" target="_blank">
            <FaInstagram  className="hover:bg-gray-600 rounded   p-3 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/khalid-alhadi-41a713295/" target="_blank">
            <FaLinkedin  className="hover:bg-gray-600 rounded  p-3 cursor-pointer" />
          </a>
          <a href="https://github.com/khaildalhadil" target="_blank">
            <ImGithub  className="hover:bg-gray-600 rounded p-3 cursor-pointer" />
          </a>
          
          <RiShutDownLine onClick={shutDown} className="hover:bg-gray-600   p-3 cursor-pointer" />
        </div>
      </div>
      <div className="col-start-2 col-end-9 m-5" >
        <h1>My Vidows in Videos Channel</h1>
        <div className=" mt-5 grid grid-cols-2 gap-2">
          <a href="https://www.youtube.com/watch?v=dcAp60CYLFY" target="_blank">
            <img  className="h-37 object-cover" src="1.webp" alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=c43llLk5268&t=746s" target="_blank">
            <img className="h-37 object-cover" src="2.webp" alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=Fuzdy_nip30&t=627s" target="_blank">
            <img className="h-37 object-cover" src="3.webp" alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=gjePa_ajM5w&t=4s" target="_blank">
            <img className="h-37 object-cover" src="4.webp" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}
