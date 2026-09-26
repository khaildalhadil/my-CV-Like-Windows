export default function AskToShutDownOrNot({ titles, onShutDown, onCancel }) {
  return (
    <div className="fixed inset-0 z-[2000] grid place-items-center bg-[#0067c0]/40 backdrop-blur-sm">
      <div className="w-[min(560px,92vw)] rounded-lg bg-[#005a9e] p-8 text-white shadow-2xl">
        <h1 className="text-2xl font-light">Closing {titles.length} app{titles.length > 1 && "s"} and shutting down</h1>
        <p className="mt-2 text-sm text-white/80">To go back and save your work, click Cancel and finish what you need to.</p>

        <ul className="mt-6 space-y-3">
          {titles.map((title) => (
            <li key={title} className="flex items-center gap-3">
              <img src="task.png" alt="" className="h-8" />
              <div>
                <p>{title}</p>
                <p className="text-xs text-white/60">This app is open</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex gap-3">
          <button onClick={onShutDown} className="bg-white/15 px-4 py-2 hover:bg-white/25">Shut down anyway</button>
          <button onClick={onCancel} className="bg-white/15 px-4 py-2 hover:bg-white/25">Cancel</button>
        </div>
      </div>
    </div>
  );
}
