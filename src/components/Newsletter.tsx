import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {

            const response = await fetch("https://formspree.io/f/xzdornwo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStatus("success");
                setEmail("");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="early-access" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto bg-card border border-border/10 p-8 rounded-3xl backdrop-blur-sm shadow-2xl"
                >
                    <h2 className="text-3xl font-bold mb-4 text-foreground">Get Early Access</h2>
                    <p className="text-muted-foreground mb-8">
                        We are rolling out invite-only access. Join the waitlist to secure your spot and start turning repos into content.
                    </p>

                    {status === "success" ? (
                        <div className="bg-green-500/10 text-green-500 border border-green-500/20 rounded-lg p-4 mb-4">
                            Thanks for joining! We'll be in touch soon.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="github_username@example.com"
                                className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                required
                                disabled={status === "loading"}
                            />
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="bg-primary text-primary-foreground font-bold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center min-w-[140px]"
                            >
                                {status === "loading" ? (
                                    <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></span>
                                ) : (
                                    "Join Waitlist"
                                )}
                            </button>
                        </form>
                    )}

                    {status === "error" && (
                        <p className="mt-4 text-red-500 text-sm">
                            Something went wrong. Please try again.
                        </p>
                    )}

                    <p className="mt-4 text-[10px] text-muted-foreground/50">
                        No spam. Unsubscribe anytime.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

