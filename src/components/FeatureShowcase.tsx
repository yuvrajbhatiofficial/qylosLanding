import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GitBranch, Twitter, Linkedin, Github } from "lucide-react";

const FeatureCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn("rounded-xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden", className)}>
        {children}
    </div>
);

export default function FeatureShowcase() {
    return (
        <section id="features" className="py-24 relative bg-background overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Feature 1: Import */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Import Git Repository</h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            Connect your GitHub workflow instantly. Qylos analyzes your public repositories and extracts meaningful insights to generate content.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Seamless GitHub Integration",
                                "Smart Branch Detection",
                                "Instant Analysis"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground/80">
                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">✓</div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Mockup UI */}
                        <FeatureCard className="p-6 max-w-md mx-auto shadow-2xl bg-card">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2 p-1 bg-muted rounded-lg border border-border/40">
                                    <Github className="w-4 h-4 ml-2 text-foreground" />
                                    <span className="text-xs text-muted-foreground mr-2">yuvrajbhatiofficial</span>
                                </div>
                                <div className="relative">
                                    <input type="text" placeholder="Search..." className="bg-muted border border-border/40 rounded-md py-1 px-3 text-xs w-32 text-foreground" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                {[
                                    { name: "EduNiche", time: "5 months ago" },
                                    { name: "AnantNetra-Website", time: "2 months ago" },
                                    { name: "awesome-algorithms", time: "5 months ago" }
                                ].map((repo, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group cursor-pointer border border-transparent hover:border-border/40 bg-muted/20">
                                        <div className="flex items-center gap-3">
                                            <GitBranch className="w-4 h-4 text-muted-foreground" />
                                            <div>
                                                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{repo.name}</div>
                                                <div className="text-[10px] text-muted-foreground">{repo.time}</div>
                                            </div>
                                        </div>
                                        <button className="text-xs bg-muted hover:bg-muted/80 text-foreground px-3 py-1.5 rounded transition-colors">Import</button>
                                    </div>
                                ))}
                            </div>
                        </FeatureCard>

                        {/* Decor */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[80px] rounded-full" />
                    </motion.div>
                </div>


                {/* Feature 2: Graph / Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:order-2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">AI-Generated Content Ecosystem</h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            Visualize your repository as a content graph. Automatically generate LinkedIn posts, Twitter threads, and blog articles from your codebase.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                                Start Generating
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full lg:order-1"
                    >
                        <FeatureCard className="absolute inset-0 bg-dotted-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] border-border/20">
                            <div className="absolute inset-0 flex items-center justify-center">

                                {/* Central Node */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute z-20 bg-card border border-border p-4 rounded-xl shadow-2xl text-center min-w-[150px]"
                                >
                                    <div className="text-sm font-bold mb-1 text-foreground">my-portfolio</div>
                                    <div className="text-xs text-muted-foreground">Main Repository</div>
                                </motion.div>

                                {/* Satellite Nodes */}
                                <motion.div
                                    initial={{ x: 100, y: -50, opacity: 0 }}
                                    whileInView={{ x: 120, y: -80, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="absolute z-10 bg-card border border-border p-3 rounded-lg shadow-xl w-48"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <Linkedin className="w-3 h-3 text-foreground" />
                                        <span className="text-[10px] uppercase font-bold text-foreground">LinkedIn Post</span>
                                    </div>
                                    <div className="h-2 w-3/4 bg-muted rounded mb-1"></div>
                                    <div className="h-2 w-1/2 bg-muted rounded"></div>
                                </motion.div>

                                <motion.div
                                    initial={{ x: -100, y: 50, opacity: 0 }}
                                    whileInView={{ x: -120, y: 80, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="absolute z-10 bg-card border border-border p-3 rounded-lg shadow-xl w-48"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <Twitter className="w-3 h-3 text-foreground" />
                                        <span className="text-[10px] uppercase font-bold text-foreground">X / Twitter</span>
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded mb-1"></div>
                                    <div className="h-2 w-2/3 bg-muted rounded"></div>
                                </motion.div>

                                {/* Connecting Lines (Simulated with simple divs or SVG) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                    <line x1="50%" y1="50%" x2="70%" y2="30%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" className="text-foreground" />
                                    <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="currentColor" strokeWidth="1" strokeDasharray="4" className="text-foreground" />
                                </svg>

                            </div>
                        </FeatureCard>
                    </motion.div>
                </div>

                {/* Feature 3: Interactive Canvas Flow Mockup */}
                <div className="mt-40">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6 text-foreground"
                        >
                            Visualize Your Content Pipeline
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
                        >
                            Experience an intuitive node-based canvas. Map out your repository, connect generation nodes, and build out platform-ready social posts all in one view.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="w-full relative rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md overflow-hidden shadow-2xl"
                    >
                        {/* App Header Mockup */}
                        <div className="flex flex-wrap items-center justify-between p-4 md:p-6 border-b border-border/40 bg-muted/30">
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-1">AI-Generated Social Posts</h3>
                                <p className="text-sm text-muted-foreground hidden md:block">Generate platform-ready content for your repositories.</p>
                            </div>
                            <div className="flex items-center gap-4 mt-4 md:mt-0">
                                <div className="bg-background border border-border/60 rounded-lg px-4 py-2 text-sm flex items-center gap-3 cursor-pointer hover:border-primary/50 transition-colors shadow-sm">
                                    <span className="text-foreground font-medium">Github Repo</span>
                                    <span className="text-muted-foreground text-[10px]">▼</span>
                                </div>
                                <button className="bg-foreground text-background px-6 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity shadow-md">
                                    Generate Posts
                                </button>
                            </div>
                        </div>

                        {/* Canvas Area */}
                        <div className="relative h-[600px] w-full bg-background/50 overflow-hidden cursor-grab active:cursor-grabbing">
                            {/* Grid Background Pattern */}
                            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                            {/* SVG Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                                {/* Repo to Readme */}
                                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }} d="M 230 270 C 280 270, 280 150, 350 150" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
                                {/* Repo to LinkedIn */}
                                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }} d="M 230 270 C 280 270, 280 300, 350 300" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
                                {/* Repo to X */}
                                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }} d="M 230 270 C 280 270, 280 450, 350 450" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
                                {/* LinkedIn to Devto */}
                                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} d="M 570 300 C 610 300, 610 210, 650 210" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
                                {/* LinkedIn to Medium */}
                                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} d="M 570 300 C 610 300, 610 390, 650 390" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
                            </svg>

                            {/* Node: Repo Container */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="absolute left-[5%] md:left-[8%] top-[40%] bg-card border-2 border-primary/20 rounded-xl p-4 shadow-xl z-20 w-[150px] text-center"
                            >
                                <div className="font-mono text-lg font-bold text-foreground">Github Repo</div>
                                <div className="absolute top-1/2 -right-3 w-3 h-3 bg-primary rounded-full -translate-y-1/2 border-2 border-background"></div>
                            </motion.div>

                            {/* Node: Readme */}
                            <motion.div
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="absolute left-[30%] md:left-[35%] top-[15%] w-56 bg-card border border-border/80 rounded-xl p-4 shadow-xl z-20"
                            >
                                <div className="absolute top-1/2 -left-3 w-3 h-3 bg-muted-foreground rounded-full -translate-y-1/2 border-2 border-background"></div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="text-xs font-bold text-foreground">Readme</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground mb-3 leading-relaxed">✨ Yuvraj-Portfolio: My Digital Showcase of Innovation & Code...</p>
                                <div className="space-y-1.5 opacity-50">
                                    <div className="h-1.5 w-full bg-muted-foreground/30 rounded"></div>
                                    <div className="h-1.5 w-4/5 bg-muted-foreground/30 rounded"></div>
                                    <div className="h-1.5 w-full bg-muted-foreground/30 rounded"></div>
                                </div>
                            </motion.div>

                            {/* Node: LinkedIn Post */}
                            <motion.div
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="absolute left-[30%] md:left-[35%] top-[40%] w-56 bg-card border border-border/80 rounded-xl p-4 shadow-xl z-20 ring-1 ring-primary/20"
                            >
                                <div className="absolute top-1/2 -left-3 w-3 h-3 bg-blue-500 rounded-full -translate-y-1/2 border-2 border-background"></div>
                                <div className="absolute top-1/2 -right-3 w-3 h-3 bg-primary rounded-full -translate-y-1/2 border-2 border-background"></div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span className="text-xs font-bold text-foreground">LinkedIn Post</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground mb-3 leading-relaxed">🚀 Thrilled to Announce the Launch of My Personal Portfolio...</p>
                                <div className="space-y-1.5 opacity-50">
                                    <div className="h-1.5 w-full bg-muted-foreground/30 rounded"></div>
                                    <div className="h-1.5 w-3/4 bg-muted-foreground/30 rounded"></div>
                                </div>
                            </motion.div>

                            {/* Node: X Post */}
                            <motion.div
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="absolute left-[30%] md:left-[35%] top-[65%] w-56 bg-card border border-border/80 rounded-xl p-4 shadow-xl z-20"
                            >
                                <div className="absolute top-1/2 -left-3 w-3 h-3 bg-muted-foreground rounded-full -translate-y-1/2 border-2 border-background"></div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700"></div>
                                    <span className="text-xs font-bold text-foreground">X Post</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground mb-3 leading-relaxed">Just launched my new portfolio: Yuvraj-Portfolio! Built with React & Tailwind ⚡</p>
                                <div className="space-y-1.5 opacity-50">
                                    <div className="h-1.5 w-5/6 bg-muted-foreground/30 rounded"></div>
                                    <div className="h-1.5 w-1/2 bg-muted-foreground/30 rounded"></div>
                                </div>
                            </motion.div>

                            {/* Node: Devto Post */}
                            <motion.div
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="absolute hidden md:block left-[65%] top-[25%] w-56 bg-card border border-border/80 rounded-xl p-4 shadow-xl z-20"
                            >
                                <div className="absolute top-1/2 -left-3 w-3 h-3 bg-purple-400 rounded-full -translate-y-1/2 border-2 border-background"></div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                    <span className="text-xs font-bold text-foreground">Devto Post</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground mb-3 leading-relaxed">Building My Dream Portfolio: A Journey Through React & Framer Motion...</p>
                                <div className="space-y-1.5 opacity-50">
                                    <div className="h-1.5 w-full bg-muted-foreground/30 rounded"></div>
                                    <div className="h-1.5 w-full bg-muted-foreground/30 rounded"></div>
                                </div>
                            </motion.div>

                            {/* Node: Medium Post */}
                            <motion.div
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="absolute hidden md:block left-[65%] top-[55%] w-56 bg-card border border-border/80 rounded-xl p-4 shadow-xl z-20"
                            >
                                <div className="absolute top-1/2 -left-3 w-3 h-3 bg-green-500 rounded-full -translate-y-1/2 border-2 border-background"></div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="text-xs font-bold text-foreground">Medium Post</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground mb-3 leading-relaxed">Every developer has a story to tell. Here is how I crafted mine using modern web tech...</p>
                                <div className="space-y-1.5 opacity-50">
                                    <div className="h-1.5 w-full bg-muted-foreground/30 rounded"></div>
                                    <div className="h-1.5 w-2/3 bg-muted-foreground/30 rounded"></div>
                                </div>
                            </motion.div>

                            {/* Mock Controls (Bottom Left) */}
                            <div className="absolute bottom-6 left-6 flex items-center gap-2 z-30">
                                <div className="flex items-center bg-card border border-border/60 rounded-lg shadow-md overflow-hidden">
                                    <button className="p-2 hover:bg-muted text-foreground transition-colors">+</button>
                                    <div className="w-px h-4 bg-border/60"></div>
                                    <button className="p-2 hover:bg-muted text-foreground transition-colors">-</button>
                                </div>
                                <button className="p-2 bg-card border border-border/60 rounded-lg shadow-md hover:bg-muted text-foreground transition-colors">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                                </button>
                            </div>

                            {/* Auto Layout Button Mock */}
                            <div className="absolute top-6 right-6 z-30">
                                <button className="bg-card border border-border/60 text-foreground px-4 py-2 rounded-lg text-xs font-medium hover:bg-muted transition-colors shadow-md flex items-center gap-2">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                    Auto Layout
                                </button>
                            </div>

                            {/* Minimap Mock (Bottom Right) */}
                            <div className="absolute bottom-6 right-6 w-32 h-24 bg-card/80 border border-border/60 rounded-lg shadow-md z-30 overflow-hidden hidden md:block backdrop-blur-sm">
                                <div className="absolute inset-0 p-2">
                                    <div className="w-full h-full border border-primary/20 rounded bg-background/50 relative">
                                        {/* Mini nodes representation */}
                                        <div className="absolute left-[10%] top-[40%] w-[10%] h-[10%] bg-primary/40 rounded-sm"></div>
                                        <div className="absolute left-[35%] top-[15%] w-[15%] h-[15%] bg-muted-foreground/40 rounded-sm"></div>
                                        <div className="absolute left-[35%] top-[40%] w-[15%] h-[15%] bg-blue-500/40 rounded-sm"></div>
                                        <div className="absolute left-[35%] top-[65%] w-[15%] h-[15%] bg-zinc-500/40 rounded-sm"></div>
                                        <div className="absolute left-[65%] top-[25%] w-[15%] h-[15%] bg-purple-500/40 rounded-sm"></div>
                                        <div className="absolute left-[65%] top-[55%] w-[15%] h-[15%] bg-green-500/40 rounded-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
