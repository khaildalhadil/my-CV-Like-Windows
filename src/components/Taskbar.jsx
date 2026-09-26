import { useEffect, useState } from "react";
import { IoBatteryFullOutline, IoVolumeHighOutline, IoWifi } from "react-icons/io5";

export function WinLogo({ size = 20 }) {
  return (
    <span className="grid grid-cols-2" style={{ width: size, height: size, gap: size / 12 }}>
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="rounded-[1px]" style={{ background: "linear-gradient(135deg, #3ab4ff, #0067c0)" }} />
      ))}
    </span>
  );
}

function TaskButton({ label, state, onClick, children }) {
  return (
    <button
      title={label}
      aria-label={label}
      onClick={onClick}
      className={`relative grid h-10 w-10 place-items-center rounded-md transition hover:bg-white/70 ${state === "active" ? "bg-white/70" : ""}`}
    >
      {children}
      {state && (
        <span className={`absolute bottom-0.5 h-[3px] rounded-full transition-all ${state === "active" ? "w-4 bg-[#0067c0]" : "w-1.5 bg-gray-500"}`} />
      )}
    </button>
  );
}

export default function Taskbar({ apps, open, active, startOpen, onStart, onApp, onShowDesktop }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="fixed inset-x-0 bottom-0 z-[1000] flex h-12 items-center border-t border-white/50 bg-[#eef0f6]/80 text-gray-800 backdrop-blur-xl">
      <nav className="absolute left-1/2 flex -translate-x-1/2 gap-1">
        <TaskButton label="Start" state={startOpen ? "active" : null} onClick={onStart}>
          <WinLogo />
        </TaskButton>
        {Object.entries(apps).map(([id, app]) => (
          <TaskButton key={id} label={app.title} onClick={() => onApp(id)} state={id === active ? "active" : open.includes(id) ? "open" : null}>
            <app.Icon className="text-2xl" />
          </TaskButton>
        ))}
      </nav>

      <div className="ml-auto flex h-full items-center gap-1">
        <div className="flex items-center gap-2 rounded px-2 py-1.5 text-sm hover:bg-white/60">
          <img src="flag.png" alt="Oman flag" className="h-4 w-4" />
          <IoWifi />
          <IoVolumeHighOutline />
          <IoBatteryFullOutline />
        </div>
        <div className="flex flex-col items-end rounded px-2 py-1 text-xs leading-4 hover:bg-white/60">
          <span>{now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
          <span>{now.toLocaleDateString("en-GB")}</span>
        </div>
        <button title="Show desktop" aria-label="Show desktop" onClick={onShowDesktop} className="h-full w-2 border-l border-gray-400/40 hover:bg-white/60" />
      </div>
    </footer>
  );
}
