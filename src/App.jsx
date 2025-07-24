import { RiFolderUserLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { FaWindows } from "react-icons/fa";
import { RiFolderUserFill } from "react-icons/ri";
import { MdFolderSpecial } from "react-icons/md";




import AboutMe from "./components/AboutMe";
import { useRef, useState } from "react";
import DiskWindows from "./components/DiskWindows";
import { setNewOffset } from "./utils/NewOffSet";
import Skills from "./components/Skills";
import AskToShutDownOrNot from "./components/AskToShutDownOrNot";
import ShutDown from "./components/ShutDown";


function App() {

  // const [showAboutMe, setShowAboutMe] = useState(false)
  const [startWindos, setShowStartWindos] = useState(false);
  const [showMyInfo, setShowMyInfo] = useState(false);
  const [showMySkills, setShowMySkills] = useState(false);

  const [showAsk, setShowAsk] = useState(false);
  const [nameOfFolderOpen, setNameOfFolderOpen] = useState("");

  const [shutDown, setShutDown] = useState(false);

  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  function botAboutAbove() {
    setShowStartWindos(false);
    aboutRef.current.style.zIndex = 10;
    skillsRef.current.style.zIndex = 0;
  }
  
  function botSkillAbove() {
    setShowStartWindos(false);
    skillsRef.current.style.zIndex = 10;
    aboutRef.current.style.zIndex = 0;
  }

  const date = new Date();

  function handelShutDown() {

    setShowStartWindos(false);


    if (showMyInfo && showMySkills) {
      setNameOfFolderOpen("about and skills");
      setShowAsk(true)
    } else if (showMyInfo) {
      setNameOfFolderOpen("about");
      setShowAsk(true)
    } else if (showMySkills) {
      setNameOfFolderOpen("skills");
      setShowAsk(true)
    } else {
      setShutDown(true);
    }
  }

  function handelClickCancel() {
    setShowAsk(false);
  }
  

  return (
    <>

      {showAsk && <AskToShutDownOrNot 
        nameOfFolderOne={nameOfFolderOpen} 
        cancelBtnClicked={handelClickCancel}
        />}


      {shutDown && <ShutDown/>}

      <div className="relative w-screen h-screen">

        <div
          onClick={()=> setShowStartWindos(false)}
          className="bg-[url('backgorundwin11.jpg')] bg-no-repeat bg-cover bg- w-screen h-screen absolute" >
        </div>

        <div className="absolute bottom-3 z-10 right-2  font-bold">
          <div className="flex gap-2" >
            <div className="flex flex-col text-sm items-center">
              <span>{date.toLocaleTimeString()}</span>
              <span>{date.getDate() + "/" + date.getMonth() +"/" + date.getFullYear()}</span>
            </div>
            <img src="./flag.png" alt="oman flag" className="w-6 h-6 mt-2" />
          </div>
        </div>

        {/* icons In window */}
        <div className=" absolute top-3 left-5">
          <RiFolderUserFill 
            onClick={() => {
                setShowStartWindos(false)
                setShowMyInfo(!showMyInfo)
              }
            }
            className=" text-6xl text-amber-200 cursor-pointer" 
            />
          <MdFolderSpecial 
            onClick={() => {
                setShowStartWindos(false)
                setShowMySkills(!showMySkills)
              }
            }
            className=" text-6xl text-amber-200 cursor-pointer mt-2" 
          />

        </div>

          <div>
            {showMyInfo && <AboutMe botAboutAbove={botAboutAbove} aboutRef={aboutRef} setShowMyInfo={setShowMyInfo} showMyInfo={showMyInfo}/> }
            {startWindos && <DiskWindows shutDown={handelShutDown} />}
            {showMySkills && <Skills botSkillAbove={botSkillAbove} skillsRef={skillsRef} setShowMySkills={setShowMySkills} showMySkills={showMySkills}  />}
          </div>


          <div 
            className="fixed bottom-0 p-3 w-screen bg-gray-300/95 z-30" >
            <div className="flex gap-32 ">
              <FaWindows 
                className=" text-4xl p-1 ms-4 rounded hover:bg-gray-300  hover:text-blue-600 cursor-pointer" 
                onClick={()=> setShowStartWindos(!startWindos)}
              />

              {/* <RiFolderUserLine onClick={() => setShowAboutMe(!showAboutMe)} className=" cursor-pointer text-5xl " />
              <GiSkills className="cursor-pointer text-5xl" /> */}
            </div>
          </div>
      </div>
    </>
  )
}

export default App;