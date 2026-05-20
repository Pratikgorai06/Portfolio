import React from 'react';

const achievements = [
  {
    title: "Smart India Hackathon (SIH)",
    description:
      "Demonstrated strong problem-solving and technical capabilities by successfully qualifying through the highly competitive internal selection rounds.",
    category: "Hackathon",
  },
  {
    title: "Hackathon Competitor",
    description:
      "Distinguished as a 3-time Hackathon Finalist, consistently delivering innovative technical solutions and standing out among 200+ competing teams.",
    category: "Competition",
  },
  {
    title: "Design & Development Wins",
    description:
      "Achieved multiple podium finishes, securing 1st Place in a regional design competition, 2nd Place in the VIBE-A-THON web development hackathon (200+ participants), and 3rd Prize in the War-of-Web UI/UX challenge (150+ participants).",
    category: "Awards",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 right-1/4 w-96 h-96
        bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Achievements & {" "}
            <span className="font-serif italic font-normal text-white">
              Awards.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A showcase of recognitions, competition wins, and milestones achieved along the journey.
          </p>
        </div>

        {/* Grid layout for achievements */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => (
            <div
              key={achievement.title}
              className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 animate-fade-in flex flex-col"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              <span className="text-sm text-primary font-medium">
                {achievement.category}
              </span>
              <h3 className="text-xl font-semibold mt-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground mt-4 flex-grow">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
