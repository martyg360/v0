export const cyberpunkThemes = {
  neon: {
    name: "Neon Blue",
    primary: "rgb(59, 130, 246)", // blue-500
    secondary: "rgb(6, 182, 212)", // cyan-500
    accent: "rgb(14, 165, 233)", // sky-500
    gradient: "from-blue-600 to-cyan-600",
    gradientHover: "from-blue-700 to-cyan-700",
    border: "border-blue-900/50 dark:border-blue-900/50",
    borderHover: "border-blue-500/50 dark:border-blue-500/50",
    text: "text-blue-600 dark:text-blue-400",
    textHover: "text-blue-700 dark:text-blue-300",
    bg: "bg-blue-50 dark:bg-blue-900/30",
    bgHover: "bg-blue-100 dark:bg-blue-950/30",
    // Light mode specific
    lightBg: "bg-blue-50/80",
    lightText: "text-blue-700",
    lightBorder: "border-blue-200",
    // Dark mode specific
    darkBg: "bg-blue-900/30",
    darkText: "text-blue-400",
    darkBorder: "border-blue-900/50",
  },
  matrix: {
    name: "Matrix Green",
    primary: "rgb(34, 197, 94)", // green-500
    secondary: "rgb(132, 204, 22)", // lime-500
    accent: "rgb(101, 163, 13)", // lime-600
    gradient: "from-green-600 to-lime-600",
    gradientHover: "from-green-700 to-lime-700",
    border: "border-green-200 dark:border-green-900/50",
    borderHover: "border-green-500/50 dark:border-green-500/50",
    text: "text-green-700 dark:text-green-400",
    textHover: "text-green-800 dark:text-green-300",
    bg: "bg-green-50 dark:bg-green-900/30",
    bgHover: "bg-green-100 dark:bg-green-950/30",
    // Light mode specific
    lightBg: "bg-green-50/80",
    lightText: "text-green-800",
    lightBorder: "border-green-200",
    // Dark mode specific
    darkBg: "bg-green-900/30",
    darkText: "text-green-400",
    darkBorder: "border-green-900/50",
  },
  synthwave: {
    name: "Synthwave Purple",
    primary: "rgb(168, 85, 247)", // purple-500
    secondary: "rgb(236, 72, 153)", // pink-500
    accent: "rgb(192, 132, 252)", // purple-400
    gradient: "from-purple-600 to-pink-600",
    gradientHover: "from-purple-700 to-pink-700",
    border: "border-purple-200 dark:border-purple-900/50",
    borderHover: "border-purple-500/50 dark:border-purple-500/50",
    text: "text-purple-700 dark:text-purple-400",
    textHover: "text-purple-800 dark:text-purple-300",
    bg: "bg-purple-50 dark:bg-purple-900/30",
    bgHover: "bg-purple-100 dark:bg-purple-950/30",
    // Light mode specific
    lightBg: "bg-purple-50/80",
    lightText: "text-purple-800",
    lightBorder: "border-purple-200",
    // Dark mode specific
    darkBg: "bg-purple-900/30",
    darkText: "text-purple-400",
    darkBorder: "border-purple-900/50",
  },
  cyberpunk: {
    name: "Cyberpunk Orange",
    primary: "rgb(249, 115, 22)", // orange-500
    secondary: "rgb(239, 68, 68)", // red-500
    accent: "rgb(251, 146, 60)", // orange-400
    gradient: "from-orange-600 to-red-600",
    gradientHover: "from-orange-700 to-red-700",
    border: "border-orange-200 dark:border-orange-900/50",
    borderHover: "border-orange-500/50 dark:border-orange-500/50",
    text: "text-orange-700 dark:text-orange-400",
    textHover: "text-orange-800 dark:text-orange-300",
    bg: "bg-orange-50 dark:bg-orange-900/30",
    bgHover: "bg-orange-100 dark:bg-orange-950/30",
    // Light mode specific
    lightBg: "bg-orange-50/80",
    lightText: "text-orange-800",
    lightBorder: "border-orange-200",
    // Dark mode specific
    darkBg: "bg-orange-900/30",
    darkText: "text-orange-400",
    darkBorder: "border-orange-900/50",
  },
  arctic: {
    name: "Arctic Teal",
    primary: "rgb(20, 184, 166)", // teal-500
    secondary: "rgb(6, 182, 212)", // cyan-500
    accent: "rgb(45, 212, 191)", // teal-400
    gradient: "from-teal-600 to-cyan-600",
    gradientHover: "from-teal-700 to-cyan-700",
    border: "border-teal-200 dark:border-teal-900/50",
    borderHover: "border-teal-500/50 dark:border-teal-500/50",
    text: "text-teal-700 dark:text-teal-400",
    textHover: "text-teal-800 dark:text-teal-300",
    bg: "bg-teal-50 dark:bg-teal-900/30",
    bgHover: "bg-teal-100 dark:bg-teal-950/30",
    // Light mode specific
    lightBg: "bg-teal-50/80",
    lightText: "text-teal-800",
    lightBorder: "border-teal-200",
    // Dark mode specific
    darkBg: "bg-teal-900/30",
    darkText: "text-teal-400",
    darkBorder: "border-teal-900/50",
  },
}

export type ThemeName = keyof typeof cyberpunkThemes
