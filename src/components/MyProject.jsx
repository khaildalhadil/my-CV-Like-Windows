import { FaGithub } from "react-icons/fa";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { projects } from "../data/projects";

// File Explorer look: address bar, side pane, big icon view of projects.
export default function MyProject() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-2 text-sm">
        <span className="flex flex-1 items-center gap-2 rounded border border-gray-200 bg-white px-3 py-1">
          <FcFolder /> This PC › Khalid › Projects
        </span>
        <span className="text-gray-500">{projects.length} items</span>
      </div>

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-44 shrink-0 border-r border-gray-200 bg-[#f9f9f9] p-2 text-sm @2xl:block">
          <p className="flex items-center gap-2 rounded bg-[#e5eef8] px-2 py-1.5"><FcOpenedFolder /> Projects</p>
          <a href="https://github.com/khaildalhadil" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded px-2 py-1.5 hover:bg-black/5">
            <FaGithub /> GitHub
          </a>
        </aside>

        <main className="flex-1 overflow-auto p-4">
          {projects.length === 0 ? (
            <div className="grid h-full place-items-center text-center text-gray-500">
              <div>
                <FcOpenedFolder className="mx-auto text-7xl" />
                <p className="mt-2">This folder is empty.</p>
                <p className="text-sm">Projects are coming soon.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3 @xl:grid-cols-2 @4xl:grid-cols-3">
              {projects.map((p) => (
                <a key={p.name} href={p.link} target="_blank" rel="noreferrer"
                  className="overflow-hidden rounded-lg border border-gray-200 bg-white hover:border-[#0067c0]/50 hover:shadow-md">
                  {p.image
                    ? <img src={p.image} alt={p.name} className="aspect-video w-full object-cover" />
                    : <div className="grid aspect-video place-items-center bg-gray-50"><FcFolder className="text-6xl" /></div>}
                  <div className="p-3">
                    <h3 className="font-semibold text-gray-900">{p.name}</h3>
                    <p className="mt-1 text-sm text-gray-600">{p.description}</p>
                    {p.tech && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {p.tech.map((t) => <span key={t} className="rounded bg-blue-50 px-2 py-0.5 text-xs text-[#0067c0]">{t}</span>)}
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
