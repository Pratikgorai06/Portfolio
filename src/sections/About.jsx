import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clear, readable, and maintainable code using best practices.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building fast, responsive web applications with a focus on efficiency.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Enjoy working with others, sharing ideas, and learning from feedback.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Always exploring new tools and improving my development skills.",
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
                I primarily work with{" "}
                <span className="text-foreground">React</span>,{" "}
                <span className="text-foreground">JavaScript</span>, and{" "}
                <span className="text-foreground">Node.js</span>, building
                projects such as authentication systems, dashboards, and
                API-driven applications.
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
