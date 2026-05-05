import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-background text-foreground selection:bg-primary/20">

            {/* Background Gradients */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] rounded-full opacity-30 animate-pulse" />
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">

                <div
                    className="mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out fill-mode-both"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
                        Let Your Code <br /> Do the Talking.
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        Generate technical blogs, changelogs, and product content straight from your GitHub repo.
                    </p>
                </div>

                <div
                    className="w-full max-w-lg mt-8 animate-in fade-in zoom-in-95 duration-1000 ease-out fill-mode-both delay-300"
                >
                    <div className="mt-8 flex items-center justify-center gap-4 text-xs text-muted-foreground/60">
                        <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                        <span className="flex items-center gap-1">No marketing. Just code → content.✨</span>
                        <span className="flex items-center gap-1"></span>
                    </div>
                </div>

            </div>
        </div>
    );
}
