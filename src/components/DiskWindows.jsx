import { RiShutDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function DiskWindows({shutDown}) {
  return (
    <div className="h-2/3 w-2/6 bg-[#232323] absolute bottom-13  text-white grid grid-cols-8  text-2xl z-20 rounded-t shadow-sm " >
      <div className=" flex flex-col justify-between p-3 text-6xl "  >
          <FaBars className="p-3 hover:bg-gray-600 rounded cursor-pointer" />
        <div className="flex gap-9 flex-col text-6xl" >
          <FaInstagram  className="hover:bg-gray-600 rounded   p-3 cursor-pointer" />
          <FaLinkedin  className="hover:bg-gray-600 rounded  p-3 cursor-pointer" />
          <ImGithub  className="hover:bg-gray-600 rounded p-3 cursor-pointer" />
          <RiShutDownLine onClick={shutDown} className="hover:bg-gray-600   p-3 cursor-pointer" />
        </div>
      </div>
      <div className="col-start-2 col-end-9" >
        khalid
      </div>
    </div>
  )
}
