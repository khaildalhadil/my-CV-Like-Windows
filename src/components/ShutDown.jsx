import { useEffect, useState } from "react";
import { RiShutDownLine } from "react-icons/ri";
import { WinLogo } from "./Taskbar";

// "Shutting down" spinner -> lock screen with a power button -> boot logo -> back to the desktop.
export default function ShutDown({ onStart }) {
  const [phase, setPhase] = useState("down");

  useEffect(() => {
    if (phase === "off") return;
    const t = setTimeout(() => (phase === "down" ? setPhase("off") : onStart()), phase === "down" ? 1800 : 1600);
    return () => clearTimeout(t);
  }, [phase, onStart]);

  if (phase === "off") {
    return (
      <div className="fixed inset-0 z-[3000] grid place-items-center bg-[url('/backgorundwin11-2.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
        <div className="relative flex flex-col items-center gap-8 text-white">
          <p className="text-8xl font-light">{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
          <button onClick={() => setPhase("boot")} className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 backdrop-blur hover:bg-white/30">
            <RiShutDownLine /> Start Windows
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[3000] flex flex-col items-center justify-center gap-16 bg-black text-white">
      {phase === "boot" && <WinLogo size={96} />}
      <span className="spinner" />
      {phase === "down" && <p className="text-lg">Shutting down</p>}
    </div>
  );
}
