import { useState } from "react";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/Button";

export const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formEle = e.target;
    const formData = new FormData(formEle);

    try {
      const response = await fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });
      setStatus("success");
      formEle.reset();
    } catch (err) {
      console.error(err);
      setStatus("idle");
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm uppercase tracking-wider text-primary">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let’s{" "}
            <span className="font-serif italic font-normal text-white">
              connect.
            </span>
          </h2>
          <p className="text-muted-foreground mt-6">
            Have an idea, opportunity, or just want to say hello? Drop a message
            — I’d love to hear from you.
          </p>
        </div>

        {status === "success" ? (
          /* Success State */
          <div className="glass rounded-3xl p-16 text-center max-w-2xl mx-auto animate-fade-in">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-3">Message sent!</h3>
            <p className="text-muted-foreground text-lg">
              Thanks for reaching out. I’ll get back to you soon.
            </p>
            {/* Optional: Button to send another message */}
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => setStatus("idle")}
            >
              Send another message
            </Button>
          </div>
        ) : (
          /* Form Layout */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left info */}
            <div className="space-y-8 lg:sticky lg:top-32">
              <h3 className="text-3xl font-bold leading-tight">
                Let’s build something meaningful together.
              </h3>

              <p className="text-muted-foreground text-lg">
                I’m open to internships, entry-level roles, and collaborative
                projects. If you think I’d be a good fit — let’s talk.
              </p>

              <div className="glass p-6 rounded-2xl border border-primary/30 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a
                    href="mailto:pratikgorai06@gmail.com"
                    className="font-semibold text-primary hover:underline"
                  >
                    pratikgorai06@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-5 py-4 rounded-xl bg-surface border border-border focus:border-primary outline-none"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full px-5 py-4 rounded-xl bg-surface border border-border focus:border-primary outline-none"
                />

                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message"
                  className="w-full px-5 py-4 rounded-xl bg-surface border border-border focus:border-primary outline-none resize-none"
                />

                <Button
                  size="lg"
                  className="w-full"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
