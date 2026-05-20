import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Architecting scalable web applications using the MERN stack and modern tools.",
  },
  {
    icon: Rocket,
    title: "Proven Performer",
    description:
      "3x Hackathon Finalist (including SIH) and multiple design competition winner.",
  },
  {
    icon: Users,
    title: "Leadership & Collaboration",
    description:
      "Technical Member at IIC, organizing events and leading development teams.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Regularly competing in technical challenges to architect real-world solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building modern web apps,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a web developer who enjoys building clean, functional, and
                user-friendly web applications. I’m passionate about turning
                ideas into real products that feel intuitive and reliable.
              </p>

              <p>
                I am currently pursuing my{" "}
                <span className="text-foreground">B.Tech in Civil Engineering at BIT Sindri</span>. 
                I primarily work with the{" "}
                <span className="text-foreground">MERN Stack</span>, building
                projects ranging from comprehensive college ERP systems to advanced ed-tech platforms.
              </p>

              <p>
                I’m constantly learning, refining my skills, and experimenting
                with new technologies to improve both code quality and user
                experience.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “I focus on building modern web applications that are simple,
                efficient, and enjoyable to use.”
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={item.title}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
