const SKILLS = [
  ["React.svg", "React"],
  ["Three.js.svg", "Three.js"],
  ["React.svg", "R3F"],
  ["gsap-greensock.svg", "GSAP"],
  ["Node.js.svg", "Node.js"],
  ["icons8-next.js-48.png", "Next.js"],
  ["MongoDB.svg", "MongoDB"],
  ["icons8-c-48.png", "C#"],
  ["icons8-.net-framework-48.png", "ASP.NET Core"],
  ["icons8-sql-server-48.png", "SQL Server"],
  ["Java.svg", "Java"],
  ["Tailwind CSS.svg", "Tailwind CSS"],
  ["Bootstrap.svg", "Bootstrap"],
  ["Git.svg", "Git"],
  ["GitHub.svg", "GitHub"],
];

export default function Skills() {
  return (
    <div className="p-6">
      <p className="font-main text-2xl">These are the tools I have learned over the past 3 years, and I'm always happy to explore new ones.</p>
      <div className="mt-5 grid grid-cols-2 gap-2 @xl:grid-cols-3">
        {SKILLS.map(([img, name]) => (
          <div key={name} className="flex items-center gap-3 rounded-md border border-gray-200 bg-gray-50 p-3 hover:border-[#0067c0]/40 hover:bg-blue-50">
            <img className="h-9 w-9 object-contain" src={img} alt="" />
            <span className="font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
