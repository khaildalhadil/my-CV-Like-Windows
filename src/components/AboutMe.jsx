import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const WHAT_I_DO = [
  ["3D web & games", "Interactive 3D sites and browser games with Three.js and React Three Fiber, with models I build myself in Blender."],
  ["Full-stack web", "Web apps with React, Next.js and Tailwind CSS on the front end, and Node.js or ASP.NET Core with MongoDB / SQL Server behind them."],
  ["IoT", "Small hardware projects like controlling an ESP32 relay from a web page."],
  ["Teaching", "Programming lessons and exam prep for students on my YouTube channel."],
];

const LINKS = [
  ["GitHub", "https://github.com/khaildalhadil", FaGithub, "#181717"],
  ["LinkedIn", "https://www.linkedin.com/in/khalid-alhadi-41a713295/", FaLinkedin, "#0a66c2"],
  ["Instagram", "https://www.instagram.com/kk_lold/reels/?next=%2F", FaInstagram, "#e1306c"],
  ["YouTube · Code With Me", "https://www.youtube.com/@khalid_alhadi_101", FaYoutube, "#ff0000"],
];

const h3 = "mt-8 border-b border-gray-200 pb-1 text-xl font-semibold text-gray-900";

export default function AboutMe() {
  return (
    <div className="p-6">
      <div className="grid gap-6 @2xl:grid-cols-[2fr_1.2fr]">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Khalid Alhadi</h1>
          <h2 className="text-2xl text-[#0067c0]">Software Engineer</h2>
          <p className="mt-5 font-main text-xl leading-relaxed">My name is Khalid Abdullah Alhadi, a 25-year-old Omani from Barka. I am passionate about programming and everything related to technology. I am currently pursuing a Bachelor's degree in Computer Science, and I am expected to graduate in 2026, which will be my final year.</p>
          <p className="mt-5 font-main text-xl leading-relaxed">I have 3 years of programming experience, having started in 2023. I enjoy studying because it helps me stay disciplined and organize my schedule effectively. I also love helping others — I run a YouTube channel called khalid_alhadi_101, where I create content to support students in programming and exam preparation.</p>
          <p className="mt-5 font-main text-xl leading-relaxed">Additionally, I regularly share what I learn on LinkedIn and Instagram to engage with the tech community and contribute to knowledge sharing.</p>
        </div>
        <img src="myImg.png" alt="Khalid Alhadi" className="w-full rounded-lg object-cover" />
      </div>

      <h3 className={h3}>What I do</h3>
      <div className="mt-4 grid gap-3 @xl:grid-cols-2">
        {WHAT_I_DO.map(([title, text]) => (
          <div key={title} className="rounded-md border border-gray-200 bg-gray-50 p-4">
            <p className="font-semibold text-[#0067c0]">{title}</p>
            <p className="mt-1 font-main text-lg leading-snug">{text}</p>
          </div>
        ))}
      </div>

      <h3 className={h3}>Journey</h3>
      <ul className="mt-4 space-y-3 border-l-2 border-[#0067c0]/30 pl-5 font-main text-lg">
        <li><b className="font-sans text-sm text-[#0067c0]">2023</b><br />Started programming.</li>
        <li><b className="font-sans text-sm text-[#0067c0]">2025</b><br />Web apps like Gulf College Chat, GreenSip Coffee and Search GitHub Users — and my first steps into 3D: a portal scene, a physics game and my first 3D CV.</li>
        <li><b className="font-sans text-sm text-[#0067c0]">2026</b><br />Green Gym and an ESP32 relay controller, then more 3D browser games: Oman Chase, Reach the Top and Esbaar Drone.</li>
        <li><b className="font-sans text-sm text-[#0067c0]">2026</b><br />Final year — graduating with a Bachelor's in Computer Science.</li>
      </ul>

      <h3 className={h3}>Find me</h3>
      <div className="mt-4 flex flex-wrap gap-2 pb-2">
        {LINKS.map(([name, href, Icon, color]) => (
          <a key={name} href={href} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 hover:border-[#0067c0]/40 hover:bg-blue-50">
            <Icon style={{ color }} /> {name}
          </a>
        ))}
      </div>
    </div>
  );
}
