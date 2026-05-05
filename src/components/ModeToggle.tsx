import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ModeToggle() {
    const [theme, setThemeState] = useState<"theme-light" | "dark" | "system">("theme-light")

    useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark")
        setThemeState(isDark ? "dark" : "theme-light")
    }, [])

    useEffect(() => {
        const isDark =
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        document.documentElement.classList[isDark ? "add" : "remove"]("dark")
    }, [theme])

    const toggleTheme = () => {
        setThemeState(prev => prev === "dark" ? "theme-light" : "dark");
    }

    return (
        <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 sticky top-2"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
