import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        quote: "Qylos transformed how I document my open source work. It's like having a dev-rel team in a box.",
        author: "Alex C.",
        role: "Senior Engineer",
        company: "Vercel"
    },
    {
        quote: "The visual graph is a game changer. I can see exactly how my repo translates into content.",
        author: "Sarah J.",
        role: "Frontend Lead",
        company: "Shopify"
    },
    {
        quote: "Finally, a tool that understands code context. The generated posts actually make sense.",
        author: "David M.",
        role: "Full Stack Dev",
        company: "Freelance"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Loved by Developers</h2>
                    <p className="text-muted-foreground">Join thousands of developers automating their personal brand.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-2xl border border-border/10 bg-card hover:bg-muted/20 transition-colors"
                        >
                            <p className="text-lg text-foreground/90 mb-6 font-light">"{t.quote}"</p>
                            <div>
                                <div className="font-bold text-foreground">{t.author}</div>
                                <div className="text-xs text-muted-foreground">{t.role}, {t.company}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
