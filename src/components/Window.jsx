import { useRef, useState } from "react";
import { VscChromeClose, VscChromeMaximize, VscChromeMinimize, VscChromeRestore } from "react-icons/vsc";

// One Windows 11 style window: drag by the title bar, minimize / maximize / close.
export default function Window({ app, z, active, minimized, maximized, onFocus, onMinimize, onToggleMax, onClose, children }) {
  // on small screens (e.g. the 3D laptop's 854x534 screen) open smaller than the desktop, like a real window
  const [size] = useState(() => ({
    w: Math.min(app.size.w, Math.round(innerWidth * 0.7)),
    h: Math.min(app.size.h, Math.round((innerHeight - 48) * 0.76)),
  }));
  const [pos, setPos] = useState(() => ({
    x: Math.max(0, Math.min(app.pos.x * Math.min(1, innerWidth / 1280), innerWidth - size.w)),
    y: Math.max(0, Math.min(app.pos.y * Math.min(1, innerHeight / 800), innerHeight - 48 - size.h)),
  }));
  const drag = useRef(null);

  function startDrag(e) {
    if (maximized || e.button !== 0 || e.target.closest("button")) return;
    drag.current = { dx: e.clientX - pos.x, dy: e.clientY - pos.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function moveDrag(e) {
    if (!drag.current) return;
    setPos({
      x: Math.min(Math.max(e.clientX - drag.current.dx, 120 - size.w), innerWidth - 120),
      y: Math.min(Math.max(e.clientY - drag.current.dy, 0), innerHeight - 100),
    });
  }

  const frame = maximized
    ? { left: 0, top: 0, width: "100vw", height: "calc(100vh - 48px)" }
    : { left: pos.x, top: pos.y, width: size.w, height: size.h };

  return (
    <section
      onPointerDown={onFocus}
      style={{ ...frame, zIndex: z }}
      className={`win absolute flex flex-col overflow-hidden bg-white text-gray-800 shadow-2xl ring-1 ring-black/15
        ${maximized ? "" : "rounded-lg"} ${minimized ? "win-min" : ""}`}
    >
      <header
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={() => (drag.current = null)}
        onDoubleClick={onToggleMax}
        className={`flex h-9 shrink-0 select-none items-center ${active ? "bg-[#eef0f6]" : "bg-[#f9f9f9] text-gray-400"}`}
      >
        <app.Icon className="ml-3 text-lg" />
        <span className="ml-2 text-xs">{app.title}</span>
        <div className="ml-auto flex h-full">
          <button onClick={onMinimize} aria-label="Minimize" className="grid w-11 place-items-center hover:bg-black/5">
            <VscChromeMinimize />
          </button>
          <button onClick={onToggleMax} aria-label="Maximize" className="grid w-11 place-items-center hover:bg-black/5">
            {maximized ? <VscChromeRestore /> : <VscChromeMaximize />}
          </button>
          <button onClick={onClose} aria-label="Close" className="grid w-11 place-items-center hover:bg-[#c42b1c] hover:text-white">
            <VscChromeClose />
          </button>
        </div>
      </header>
      <div className="@container min-h-0 flex-1 overflow-auto">{children}</div>
    </section>
  );
}
