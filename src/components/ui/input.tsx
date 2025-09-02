import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "text-black ps-4 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-12 w-full min-w-0 bg-transparent shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-lg",
        "focus-visible:border-ring focus-visible:ring-[var(--color-yellow)] focus-visible:ring-[1.5px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-b-2 border-white placeholder:text-white placeholder:font-bold text-white",
        className
      )}
      {...props}
    />
  )
}

export { Input }
