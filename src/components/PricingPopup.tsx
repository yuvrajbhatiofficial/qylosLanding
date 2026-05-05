import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";

export function PricingPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Prevent scrolling when modal is open
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/60 backdrop-blur-md"
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-card border border-border/60 rounded-3xl p-8 md:p-12 shadow-2xl max-w-xl w-full relative overflow-hidden text-center"
                    >
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                        
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors bg-muted/50 p-2 rounded-full"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <Sparkles className="w-8 h-8 text-primary" />
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Launching Soon!</h3>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            We are finalizing our pricing plans to give you the best value. Join the waitlist to get early access and exclusive pioneer discounts.
                        </p>
                        
                        <a 
                            href="#early-access" 
                            onClick={() => setIsOpen(false)}
                            className="inline-block w-full sm:w-auto px-10 bg-foreground text-background font-bold py-4 rounded-xl hover:opacity-90 transition-opacity text-lg shadow-lg"
                        >
                            Join Waitlist
                        </a>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    return (
        <>
            <button 
                onClick={() => setIsOpen(true)}
                className="hover:text-foreground transition-colors cursor-pointer text-sm font-sm text-muted-foreground"
            >
                Pricing
            </button>

            {mounted && createPortal(modalContent, document.body)}
        </>
    );
}
