import { FaWindows } from "react-icons/fa6";



export default function ShutDown({handelOpenWindowns}) {
  return (
    <div className='absolute top-0 left-0 w-screen h-screen z-50 bg-[url(backgorundwin11-2.jpg)] bg-cover'>
      <div className=' absolute top-2/8 left-2/8  w-1/2 h-1/4 text-center pt-10 '>
        <p className="  text-5xl font-bold text-blue-800" >Windows Now Shut Down 🚫</p>
        <button onClick={handelOpenWindowns} className="bg-blue-600 p-2 px-4 w-50 rounded-full mt-10 text-gray-100 text-lg cursor-pointer flex items-center justify-center gap-3 ms-[40%]" > <FaWindows /> <span>Start Windows</span></button>

      </div>
    </div>
  )
}
