import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import cardBack from "@/assets/card-back.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "EA AGENCY — Creative Minds Behind Digital Growth" },
      { name: "description", content: "EA AGENCY is a creative digital agency helping brands grow through web development, design, video editing, and digital marketing." },
    ],
  }),
});

const services = [
  { title: "Web Development", icon: "⛩️" },
  { title: "Landing Page Design", icon: "🏯" },
  { title: "Video Editing", icon: "🎬" },
  { title: "Graphic Design", icon: "🎨" },
  { title: "Social Media Management", icon: "🌸" },
  { title: "Digital Marketing", icon: "🌙" },
  { title: "Ads Management", icon: "🏮" },
  { title: "Content Creation", icon: "✒️" },
];

type Member = { name: string; roles: string[]; tools: string[]; sigil: string };

const team: Member[] = [
  { name: "Ramprakash", roles: ["Web Developer", "Landing Page Designer", "Graphic Designer", "Video Editor", "Content Creator"], tools: ["DaVinci Resolve", "Photoshop", "Canva"], sigil: "竜" },
  { name: "Rajeshkannan", roles: ["Digital Marketing Specialist", "Ads Manager", "Social Media Manager", "Video Editor"], tools: ["Premiere Pro", "Filmora"], sigil: "虎" },
  { name: "Arivu", roles: ["Video Editor"], tools: ["CapCut"], sigil: "鳳" },
  { name: "Munesh", roles: ["Video Editor", "Graphic Designer"], tools: ["CapCut", "Adobe Photoshop"], sigil: "狼" },
  { name: "Shahul Hameed", roles: ["Video Editor"], tools: ["Premiere Pro"], sigil: "鷹" },
  { name: "Prema", roles: ["Web Developer", "Landing Page Designer", "Content Creator", "Video Editor"], tools: ["CapCut"], sigil: "蓮" },
];

function Petals() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const count = 18;
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "petal";
      p.style.left = Math.random() * 100 + "%";
      p.style.animationDuration = 8 + Math.random() * 10 + "s";
      p.style.animationDelay = -Math.random() * 12 + "s";
      p.style.transform = `scale(${0.5 + Math.random()})`;
      el.appendChild(p);
    }
    return () => { el.innerHTML = ""; };
  }, []);
  return <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden />;
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl tracking-[0.3em] text-gradient">EA</a>
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase text-foreground/80">
          <a href="#services" className="hover:text-primary transition">Services</a>
          <a href="#team" className="hover:text-primary transition">Team</a>
          <a href="#works" className="hover:text-primary transition">Works</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center px-5 py-2 rounded-full border border-primary/60 text-sm tracking-wider hover:bg-primary/20 transition">
          Contact us
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background" />
      <Petals />
      <Nav />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-32 text-center">
        <p className="text-xs md:text-sm tracking-[0.5em] uppercase text-primary/90 mb-6">EA AGENCY</p>
        <h1 className="text-5xl md:text-8xl font-display leading-[0.95] text-gradient drop-shadow-[0_4px_30px_oklch(0.4_0.2_320_/_0.5)]">
          Creative Minds<br />Behind Digital Growth
        </h1>
        <p className="mt-8 max-w-2xl mx-auto text-lg text-foreground/80">
          A creative digital agency crafting modern design, content, and marketing
          experiences that elevate brands.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#works" className="px-8 py-3 rounded-full gradient-primary text-primary-foreground font-medium tracking-wide shadow-glow glow-pulse">
            View our works
          </a>
          <a href="#team" className="px-8 py-3 rounded-full border border-foreground/30 hover:border-primary tracking-wide transition">
            Meet the team
          </a>
        </div>
      </div>
    </section>
  );
}

function Founders() {
  const founders = [
    { name: "Ramprakash", role: "Co-Founder & Creative Developer" },
    { name: "Rajeshkannan", role: "Co-Founder & Digital Marketing Lead" },
  ];
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs tracking-[0.5em] uppercase text-primary mb-3">About</p>
        <h2 className="text-center text-4xl md:text-6xl text-gradient mb-6">The Story of EA</h2>
        <p className="text-center max-w-3xl mx-auto text-foreground/80 leading-relaxed text-lg">
          EA AGENCY is a creative digital agency focused on helping brands grow through
          modern design, content creation, video editing, web development, and digital
          marketing solutions.
        </p>
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {founders.map((f) => (
            <div key={f.name} className="gradient-card border border-border rounded-2xl p-8 shadow-card backdrop-blur-sm float-slow">
              <div className="text-accent text-sm tracking-[0.3em] uppercase">Founder</div>
              <h3 className="text-3xl mt-2">{f.name}</h3>
              <p className="text-muted-foreground mt-3">{f.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-28 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs tracking-[0.5em] uppercase text-primary mb-3">What we do</p>
        <h2 className="text-center text-4xl md:text-6xl text-gradient mb-16">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div key={s.title} className="gradient-card border border-border rounded-2xl p-6 hover:border-primary/70 transition group hover:-translate-y-1">
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{s.icon}</div>
              <h3 className="text-lg">{s.title}</h3>
              <div className="mt-4 h-px bg-gradient-to-r from-primary/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ m }: { m: Member }) {
  return (
    <div className="flip-card h-[420px] cursor-pointer" onClick={(e) => e.currentTarget.classList.toggle("is-flipped")}>
      <div className="flip-card-inner shadow-card">
        {/* FRONT — card back artwork */}
        <div className="flip-face relative">
          <img src={cardBack} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
            <div className="font-display text-7xl text-accent drop-shadow-[0_2px_20px_oklch(0.4_0.2_320)] mb-3">{m.sigil}</div>
            <h3 className="text-2xl text-gradient">{m.name}</h3>
            <p className="mt-2 text-xs tracking-[0.3em] uppercase text-primary/80">Tap to reveal</p>
          </div>
        </div>
        {/* BACK — details */}
        <div className="flip-face flip-face-back gradient-card border border-primary/40 p-6 flex flex-col">
          <div className="text-xs tracking-[0.3em] uppercase text-accent">Member</div>
          <h3 className="text-3xl mt-1 text-gradient">{m.name}</h3>
          <div className="mt-5">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Roles</p>
            <ul className="space-y-1.5">
              {m.roles.map((r) => (
                <li key={r} className="text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />{r}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto pt-5">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Tools</p>
            <div className="flex flex-wrap gap-1.5">
              {m.tools.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-primary/40 bg-primary/10">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <section id="team" className="relative py-28 px-6 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs tracking-[0.5em] uppercase text-primary mb-3">The Crew</p>
        <h2 className="text-center text-4xl md:text-6xl text-gradient mb-4">Our Team</h2>
        <p className="text-center text-muted-foreground mb-14">Hover or tap each card to flip.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => <TeamCard key={m.name} m={m} />)}
        </div>
      </div>
    </section>
  );
}

function Works() {
  const links = [
    { title: "Video Editing Works", desc: "A reel of edits across formats and brands.", url: "https://drive.google.com/drive/folders/1thNtd1zYd6Ca1_lm3b-LO2wI79hACJE0" },
    { title: "Graphic Design Works", desc: "Posters, social creatives, and brand assets.", url: "https://drive.google.com/drive/folders/1Ksb1IzEWqXSmPjYAcFHKhCy05-azzy2i" },
  ];
  return (
    <section id="works" className="relative py-28 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs tracking-[0.5em] uppercase text-primary mb-3">Portfolio</p>
        <h2 className="text-center text-4xl md:text-6xl text-gradient mb-14">Our Works</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {links.map((l) => (
            <a key={l.title} href={l.url} target="_blank" rel="noreferrer"
               className="group relative overflow-hidden gradient-card border border-border rounded-2xl p-8 hover:border-primary transition">
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full gradient-primary opacity-30 blur-3xl group-hover:opacity-60 transition" />
              <h3 className="text-2xl">{l.title}</h3>
              <p className="text-muted-foreground mt-2">{l.desc}</p>
              <span className="inline-flex items-center gap-2 mt-6 text-primary tracking-wider text-sm">
                Open folder <span className="transition group-hover:translate-x-1">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const socials = ["Instagram", "X (Twitter)", "YouTube", "WhatsApp", "Facebook"];
  return (
    <section id="contact" className="relative py-28 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs tracking-[0.5em] uppercase text-primary mb-3">Get in touch</p>
        <h2 className="text-center text-4xl md:text-6xl text-gradient mb-14">Let's build together</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="gradient-card border border-border rounded-2xl p-6">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Phone</p>
            <p>+91 86101 61835</p>
            <p className="mt-1">+91 8610161835</p>
          </div>
          <div className="gradient-card border border-border rounded-2xl p-6">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Email</p>
            <p>ram07sep25@gmail.com</p>
            <p className="mt-1">ramprakash07rg@gmail.com</p>
          </div>
          <div className="gradient-card border border-border rounded-2xl p-6">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-3">Location</p>
            <p>Thiruvarur,TamilNadu</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a key={s} href="#" className="px-5 py-2 rounded-full border border-primary/40 hover:bg-primary/20 hover:border-primary transition text-sm tracking-wider">
              {s}
            </a>
          ))}
        </div>
      </div>
      <footer className="mt-24 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} EA AGENCY — Crafted with creativity in Tamil Nadu.
      </footer>
    </section>
  );
}

function Index() {
  return (
    <main className="relative">
      <Hero />
      <Founders />
      <Services />
      <Team />
      <Works />
      <Contact />
    </main>
  );
}
