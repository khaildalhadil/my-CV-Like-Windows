export default function AskToShutDownOrNot({nameOfFolderOne, cancelBtnClicked, callShudownAnyWay}) {
  return (
    <div className=" absolute top-0 left-0 w-screen h-screen bg-blue-600/40 z-90 flex justify-center items-center">
      <div className="h-1/2 w-1/2 bg-[#005a9e] rounded shadow-2xl p-6 ps-20 z-70 text-stone-100 flex flex-col gap-4">
        <div>
          <h1 className="text-3xl" >Closing {nameOfFolderOne == "about and skills" ? 2: 1} app and shutting down</h1>
          <p>To go back and Closing Evertything, click Cancel and finish what you need to.</p>
        </div>

        {nameOfFolderOne == "about and skills" ?

          <>
            <div className=" flex gap-4">
              <img src="task.png" alt="task" className="h-10 " />
              <div>
                <p>Task About</p>
                <p className=" text-stone-200/50">Task About is opend </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img src="task.png" alt="task" className="h-10 " />
              <div>
                <p>Task skills</p>
                <p className=" text-stone-200/50">Task skills is opend </p>
              </div>
            </div>
          </>

          : <div className=" flex gap-4">
            <img src="task.png" alt="task" className="h-10 " />
            <div>
              <p>Task {nameOfFolderOne}</p>
              <p className=" text-stone-200/50">Task {nameOfFolderOne} is opend </p>
            </div>
          </div>

        }

        

        <div className=" flex gap-4" >
          <button onClick={callShudownAnyWay} className="bg-gray-100/10 p-3 cursor-pointer">Shut down anyway </button>
          <button onClick={cancelBtnClicked} className="bg-gray-100/10 p-3 cursor-pointer">Cancel</button>
        </div>

      </div>
    </div>
  )
}
