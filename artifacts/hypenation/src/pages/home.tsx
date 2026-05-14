import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const capabilities = [
  { id: "01", title: "Festival & Portrait Shots", desc: "Raw, unfiltered energy captured in the pit and backstage." },
  { id: "02", title: "VHS & VFX Content", desc: "Gritty textures and retro formats blended with modern effects." },
  { id: "03", title: "Reel Content", desc: "High-impact short form built for the algorithm." },
  { id: "04", title: "Drone Content", desc: "Cinematic scale and aerial perspectives." },
  { id: "05", title: "Aftermovies", desc: "The moments that outlive the night." }
];

const clients = ["RED BULL", "BOILER ROOM", "MONSTER ENERGY", "TOMORROWLAND", "VICE", "DEFECTED"];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Set body to dark mode forcefully since we only want a dark theme
    document.documentElement.classList.add("dark");
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold tracking-tighter hover:text-primary transition-colors" data-testid="link-home">
            HYPENATION
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            {["Home", "About", "Services", "Portfolio", "Clients", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors" data-testid={`nav-link-${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>
          <Button variant="default" className="hidden md:flex rounded-none uppercase tracking-wider font-bold" data-testid="button-nav-cta">
            Book Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 bg-black z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            data-testid="video-hero-bg"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-crowd-at-a-concert-2-22.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-crowd-cheering-at-a-concert-4027.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10"></div>
          <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIi8+PC9zdmc+')] pointer-events-none mix-blend-overlay z-20"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.9] mb-6">
              We Don't Just<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">Capture Moments.</span><br/>
              We Craft Them.
            </h1>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Raw, real, and relentlessly visual. We live at the intersection of culture, music, and motion.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button size="lg" className="rounded-none font-bold uppercase tracking-wider h-14 px-8 text-black" data-testid="button-hero-work">
              View Our Work
            </Button>
            <Button size="lg" variant="outline" className="rounded-none font-bold uppercase tracking-wider h-14 px-8 border-border hover:bg-white hover:text-black transition-all" data-testid="button-hero-contact">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className="py-32 bg-background relative z-10 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">Capabilities</h2>
                <p className="text-muted-foreground mb-8">We build visual worlds for brands that refuse to be ignored. From the pit to the screen.</p>
              </div>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-0 border-t border-border">
              {capabilities.map((cap, i) => (
                <motion.div 
                  key={cap.id}
                  className="group relative py-8 border-b border-border flex flex-col md:flex-row md:items-center gap-6 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="absolute inset-0 bg-primary/5 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-out z-0"></div>
                  <div className="relative z-10 text-xl font-mono text-muted-foreground md:w-20 group-hover:text-primary transition-colors">{cap.id}</div>
                  <div className="relative z-10 flex-1">
                    <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">{cap.title}</h3>
                  </div>
                  <div className="relative z-10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-8 bg-primary text-black overflow-hidden flex whitespace-nowrap border-y border-primary/20">
        <motion.div 
          className="flex font-display font-bold text-4xl md:text-6xl uppercase tracking-tighter"
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        >
          <span className="mx-8">WE DON'T FOLLOW TRENDS</span> <span className="mx-8">—</span> <span className="mx-8">WE SET THEM</span> <span className="mx-8">—</span>
          <span className="mx-8">WE DON'T FOLLOW TRENDS</span> <span className="mx-8">—</span> <span className="mx-8">WE SET THEM</span> <span className="mx-8">—</span>
          <span className="mx-8">WE DON'T FOLLOW TRENDS</span> <span className="mx-8">—</span> <span className="mx-8">WE SET THEM</span> <span className="mx-8">—</span>
        </motion.div>
      </div>

      {/* Portfolio Grid */}
      <section id="portfolio" className="py-32 bg-black">
        <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">Selected Work</h2>
          <Button variant="link" className="text-primary font-bold uppercase tracking-wider hidden md:flex items-center gap-2">
            View All Archive <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="w-full px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div 
              className="group relative aspect-[16/9] md:aspect-auto md:h-[600px] overflow-hidden bg-zinc-900"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/images/portfolio-1.png" alt="Festival Crowd" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <div className="text-primary font-mono text-sm mb-2">01 / LIVE</div>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tight">Mainstage Energy</h3>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-rows-2 gap-4 md:gap-6">
              <motion.div 
                className="group relative aspect-video md:aspect-auto overflow-hidden bg-zinc-900"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img src="/images/portfolio-2.png" alt="Cinematic Portrait" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-display font-bold uppercase tracking-tight">Backstage Portraits</h3>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <motion.div 
                  className="group relative aspect-square md:aspect-auto overflow-hidden bg-zinc-900"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <img src="/images/portfolio-3.png" alt="Drone Aerial" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                      <Play className="w-4 h-4 text-white fill-white ml-1" />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group relative aspect-square md:aspect-auto overflow-hidden bg-zinc-900"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <img src="/images/portfolio-4.png" alt="VHS Style" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white text-[10px] font-mono px-2 py-1 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span> REC
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section id="clients" className="py-24 bg-zinc-950 border-y border-border">
        <div className="container mx-auto px-6 mb-12">
          <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest text-center">Trusted By The Best</h2>
        </div>
        <div className="w-full overflow-hidden flex flex-nowrap mask-edges">
          <motion.div 
            className="flex items-center gap-16 md:gap-32 px-8"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {[...clients, ...clients].map((client, i) => (
              <div key={i} className="text-3xl md:text-5xl font-display font-bold text-zinc-800 uppercase tracking-tighter whitespace-nowrap hover:text-white transition-colors duration-300">
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-card border border-border p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h2 className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6 leading-none">Let's<br/>Create<br/><span className="text-primary">Together.</span></h2>
                <p className="text-muted-foreground mb-8">Got a project? Drop us a line. We're ready to shoot.</p>
                <div className="space-y-4 font-mono text-sm">
                  <p>INFO@HYPENATION.MEDIA</p>
                  <p>+27 12 345 6789</p>
                  <p>CAPE TOWN, SOUTH AFRICA</p>
                </div>
              </div>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-lg" placeholder="JANE DOE" data-testid="input-contact-name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input type="email" className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-lg" placeholder="JANE@EXAMPLE.COM" data-testid="input-contact-email" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
                  <Textarea className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary text-lg resize-none" rows={3} placeholder="TELL US ABOUT THE PROJECT..." data-testid="input-contact-message" />
                </div>
                <Button className="w-full rounded-none font-bold uppercase tracking-wider h-14 bg-white text-black hover:bg-primary transition-colors" data-testid="button-contact-submit">
                  Send Dispatch
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-border/40">
        {/* CTA Strip */}
        <div className="border-b border-border/40">
          <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Ready to shoot?</p>
              <h3 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight leading-none">
                Let's make<br /><span className="text-primary">something real.</span>
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button className="rounded-none font-bold uppercase tracking-wider h-12 px-8 text-black" data-testid="footer-button-start">
                Start a Project
              </Button>
              <Button variant="outline" className="rounded-none font-bold uppercase tracking-wider h-12 px-8 border-border hover:bg-white hover:text-black" data-testid="footer-button-reel">
                View Showreel
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-display font-bold tracking-tighter mb-4">HYPENATION</div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-mono">
                Raw, real, relentlessly visual. We capture and craft moments that outlive the night.
              </p>
              <div className="flex gap-4">
                {["IG", "YT", "VM", "TK"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 border border-border flex items-center justify-center text-xs font-mono font-bold hover:border-primary hover:text-primary transition-all"
                    data-testid={`footer-social-${social.toLowerCase()}`}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">Company</p>
              <ul className="space-y-3">
                {["About Us", "Our Work", "Services", "Clients", "Contact"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(/\s/g, "-")}`} className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2 group" data-testid={`footer-link-${item.toLowerCase().replace(/\s/g, "-")}`}>
                      <span className="w-4 h-px bg-border group-hover:bg-primary group-hover:w-6 transition-all"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">Services</p>
              <ul className="space-y-3">
                {["Festival & Portrait Shots", "VHS & VFX Content", "Reel Content", "Drone Content", "Aftermovies"].map((item) => (
                  <li key={item}>
                    <a href="#services" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2 group" data-testid={`footer-service-${item.split(" ")[0].toLowerCase()}`}>
                      <span className="w-4 h-px bg-border group-hover:bg-primary group-hover:w-6 transition-all"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Newsletter */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">Contact</p>
              <div className="space-y-2 text-sm font-mono mb-8">
                <p className="text-muted-foreground">Cape Town, South Africa</p>
                <a href="mailto:info@hypenation.media" className="block hover:text-primary transition-colors" data-testid="footer-email">
                  info@hypenation.media
                </a>
                <a href="tel:+27123456789" className="block hover:text-primary transition-colors" data-testid="footer-phone">
                  +27 12 345 6789
                </a>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent border border-border border-r-0 px-3 py-2 text-xs font-mono focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                  data-testid="footer-newsletter-input"
                />
                <button className="bg-primary text-black px-4 py-2 text-xs font-mono font-bold uppercase hover:bg-primary/90 transition-colors" data-testid="footer-newsletter-submit">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="border-t border-border/40">
          <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
            <span>&copy; 2025 HYPENATION MEDIA. ALL RIGHTS RESERVED.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors" data-testid="footer-privacy">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors" data-testid="footer-terms">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />
    </div>
  );
}
