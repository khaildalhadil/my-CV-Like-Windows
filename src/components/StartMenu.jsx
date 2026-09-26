import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiShutDownLine } from "react-icons/ri";

const LINKS = [
  { title: "GitHub", href: "https://github.com/khaildalhadil", Icon: FaGithub, color: "#181717" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/khalid-alhadi-41a713295/", Icon: FaLinkedin, color: "#0a66c2" },
  { title: "Instagram", href: "https://www.instagram.com/kk_lold/reels/?next=%2F", Icon: FaInstagram, color: "#e1306c" },
];

const VIDEOS = [
  ["https://www.youtube.com/watch?v=dcAp60CYLFY", "1.webp"],
  ["https://www.youtube.com/watch?v=c43llLk5268&t=746s", "2.webp"],
  ["https://www.youtube.com/watch?v=Fuzdy_nip30&t=627s", "3.webp"],
  ["https://www.youtube.com/watch?v=gjePa_ajM5w&t=4s", "4.webp"],
];

const tile = "flex flex-col items-center gap-1.5 rounded-md p-2 text-xs hover:bg-white/80";

export default function StartMenu({ apps, onOpen, onShutDown }) {
  return (
    <div className="start fixed bottom-14 left-1/2 z-[900] w-[min(620px,96vw)] -translate-x-1/2 rounded-xl border border-white/60 bg-[#f3f3f3]/90 text-gray-800 shadow-2xl backdrop-blur-2xl">
      <div className="p-6 pb-4">
        <h2 className="mb-3 text-sm font-semibold">Pinned</h2>
        <div className="grid grid-cols-3 gap-1 sm:grid-cols-6">
          {Object.entries(apps).map(([id, app]) => (
            <button key={id} onClick={() => onOpen(id)} className={tile}>
              <app.Icon className="text-3xl" />
              {app.title}
            </button>
          ))}
          {LINKS.map(({ title, href, Icon, color }) => (
            <a key={title} href={href} target="_blank" rel="noreferrer" className={tile}>
              <Icon className="text-3xl" style={{ color }} />
              {title}
            </a>
          ))}
        </div>

        <h2 className="mb-3 mt-5 text-sm font-semibold">My YouTube videos</h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {VIDEOS.map(([href, img]) => (
            <a key={href} href={href} target="_blank" rel="noreferrer" className="overflow-hidden rounded-md ring-1 ring-black/10 hover:ring-[#0067c0]">
              <img src={img} alt="YouTube video" className="aspect-video w-full object-cover" />
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between rounded-b-xl border-t border-black/5 bg-black/[.03] px-8 py-3">
        <div className="flex items-center gap-3">
          <img src="myImg.png" alt="Khalid Alhadi" className="h-8 w-8 rounded-full object-cover" />
          <span className="text-sm">Khalid Alhadi</span>
        </div>
        <button onClick={onShutDown} title="Shut down" aria-label="Shut down" className="rounded-md p-2 hover:bg-black/5">
          <RiShutDownLine className="text-lg" />
        </button>
      </div>
    </div>
  );
}
