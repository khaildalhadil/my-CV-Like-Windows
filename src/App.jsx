import { useRef, useState } from "react";
import { FcBusinessman, FcCommandLine, FcFolder } from "react-icons/fc";

import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import MyProject from "./components/MyProject";
import Window from "./components/Window";
import Taskbar from "./components/Taskbar";
import StartMenu from "./components/StartMenu";
import AskToShutDownOrNot from "./components/AskToShutDownOrNot";
import ShutDown from "./components/ShutDown";

// Every app appears as a desktop icon, a taskbar button, a Start tile and a window.
const APPS = {
  about: { title: "About Me", Icon: FcBusinessman, Content: AboutMe, size: { w: 900, h: 580 }, pos: { x: 150, y: 30 } },
  skills: { title: "Skills", Icon: FcCommandLine, Content: Skills, size: { w: 660, h: 540 }, pos: { x: 230, y: 60 } },
  projects: { title: "My Projects", Icon: FcFolder, Content: MyProject, size: { w: 860, h: 560 }, pos: { x: 310, y: 90 } },
};

const GRID_X0 = 8, GRID_Y0 = 8, GRID_W = 88, GRID_H = 100;

// Click to open, drag to move (a press that moves more than 5px is a drag, not a click).
function DesktopIcon({ app, pos, selected, onSelect, onMove, onDrop, onOpen }) {
  const drag = useRef(null);

  return (
    <button
      style={{ left: pos.x, top: pos.y }}
      onPointerDown={(e) => {
        if (e.button !== 0) return;
        onSelect();
        drag.current = { sx: e.clientX, sy: e.clientY, x: pos.x, y: pos.y, moved: false };
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        const d = drag.current;
        if (!d) return;
        const dx = e.clientX - d.sx, dy = e.clientY - d.sy;
        if (!d.moved && Math.hypot(dx, dy) < 5) return;
        d.moved = true;
        onMove({
          x: Math.min(Math.max(d.x + dx, 0), innerWidth - 80),
          y: Math.min(Math.max(d.y + dy, 0), innerHeight - 48 - 96),
        });
      }}
      onPointerUp={() => {
        const d = drag.current;
        drag.current = null;
        if (!d) return;
        if (d.moved) onDrop();
        else onOpen();
      }}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
      className={`absolute flex w-20 touch-none select-none flex-col items-center gap-1 rounded p-2 text-xs text-white
        [text-shadow:0_1px_3px_#000] hover:bg-white/15 ${selected ? "bg-white/25 ring-1 ring-white/40" : ""}`}
    >
      <app.Icon className="pointer-events-none text-5xl drop-shadow" />
      {app.title}
    </button>
  );
}

export default function App() {
  const [open, setOpen] = useState([]);              // open app ids, last one is in front
  const [minimized, setMinimized] = useState({});
  const [maximized, setMaximized] = useState({});
  const [selected, setSelected] = useState(null);
  const [startOpen, setStartOpen] = useState(false);
  const [askShutDown, setAskShutDown] = useState(false);
  const [off, setOff] = useState(false);

  const [iconPos, setIconPos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("iconPos")) || {};
    } catch {
      return {};
    }
  });

  // snap the dropped icon to the desktop grid and remember the layout for next visit
  function saveIconPos() {
    setIconPos((s) => {
      const snapped = Object.fromEntries(Object.entries(s).map(([id, p]) => [id, {
        x: GRID_X0 + Math.round((p.x - GRID_X0) / GRID_W) * GRID_W,
        y: GRID_Y0 + Math.round((p.y - GRID_Y0) / GRID_H) * GRID_H,
      }]));
      try {
        localStorage.setItem("iconPos", JSON.stringify(snapped));
      } catch { /* private mode: layout just isn't remembered */ }
      return snapped;
    });
  }

  const active = open.filter((id) => !minimized[id]).at(-1);
  const setFlag = (set, id, value) => set((s) => ({ ...s, [id]: value }));
  const toFront = (id) => setOpen((o) => [...o.filter((x) => x !== id), id]);

  function openApp(id) {
    setStartOpen(false);
    setFlag(setMinimized, id, false);
    if (!open.includes(id) && innerWidth < 768) setFlag(setMaximized, id, true);
    toFront(id);
  }

  function closeApp(id) {
    setOpen((o) => o.filter((x) => x !== id));
    setFlag(setMaximized, id, false);
  }

  // Windows taskbar behaviour: click the front window to minimize it, anything else brings it forward
  function taskbarClick(id) {
    if (id === active) setFlag(setMinimized, id, true);
    else openApp(id);
  }

  function shutDown() {
    setStartOpen(false);
    if (open.length) setAskShutDown(true);
    else setOff(true);
  }

  function shutDownAnyway() {
    setAskShutDown(false);
    setOpen([]);
    setMinimized({});
    setMaximized({});
    setOff(true);
  }

  if (off) return <ShutDown onStart={() => setOff(false)} />;

  return (
    <div
      className="fixed inset-0 bg-[url('/backgorundwin113.jpg')] bg-cover bg-center"
      onPointerDown={(e) => {
        if (e.target !== e.currentTarget) return;
        setSelected(null);
        setStartOpen(false);
      }}
    >
      {Object.entries(APPS).map(([id, app], i) => (
        <DesktopIcon
          key={id}
          app={app}
          pos={iconPos[id] ?? { x: GRID_X0, y: GRID_Y0 + i * GRID_H }}
          selected={selected === id}
          onSelect={() => { setSelected(id); setStartOpen(false); }}
          onMove={(p) => setIconPos((s) => ({ ...s, [id]: p }))}
          onDrop={saveIconPos}
          onOpen={() => openApp(id)}
        />
      ))}

      {/* stable DOM order so windows keep their scroll; stacking comes from z-index */}
      {Object.keys(APPS).filter((id) => open.includes(id)).map((id) => {
        const app = APPS[id];
        return (
          <Window
            key={id}
            app={app}
            z={10 + open.indexOf(id)}
            active={id === active}
            minimized={!!minimized[id]}
            maximized={!!maximized[id]}
            onFocus={() => { setStartOpen(false); toFront(id); }}
            onMinimize={() => setFlag(setMinimized, id, true)}
            onToggleMax={() => setFlag(setMaximized, id, !maximized[id])}
            onClose={() => closeApp(id)}
          >
            <app.Content />
          </Window>
        );
      })}

      {startOpen && <StartMenu apps={APPS} onOpen={openApp} onShutDown={shutDown} />}

      <Taskbar
        apps={APPS}
        open={open}
        active={active}
        startOpen={startOpen}
        onStart={() => setStartOpen((s) => !s)}
        onApp={taskbarClick}
        onShowDesktop={() => setMinimized(Object.fromEntries(open.map((id) => [id, true])))}
      />

      {askShutDown && (
        <AskToShutDownOrNot
          titles={open.map((id) => APPS[id].title)}
          onShutDown={shutDownAnyway}
          onCancel={() => setAskShutDown(false)}
        />
      )}
    </div>
  );
}
