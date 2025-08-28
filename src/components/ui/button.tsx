import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import Link from "next/link"
import type * as React from "react"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40xaria-invalid:border-destructive font-bold",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        link: "hover:text-[var(--color-yellow)] rounded-full border-[1.5px] border-solid border-[var(--color-yellow)] shadow-[0px_0px_1px_var(--sds-size-depth-025)_#DBBA0640] text-[var(--color-white)] cursor-pointer bg-[var(--main)] text-white shadow-md",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 w-72 p-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

type BaseProps = VariantProps<typeof buttonVariants> & {
  className?: string
}

type ButtonAsButton = BaseProps &
  Omit<React.ComponentProps<"button">, keyof BaseProps> & {
    asChild?: boolean
  }

type ButtonAsLink = BaseProps &
  Omit<React.ComponentProps<typeof Link>, keyof BaseProps> & {
    href: string,
    target?: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

function Button(props: ButtonProps) {
  const { className, variant, size, ...rest } = props
  const classes = cn(buttonVariants({ variant, size, className }))

  // Check if it's a link by checking if href exists
  if ('href' in props && props.href) {
    const { href, target, ...linkProps } = rest as ButtonAsLink
    return (
      <Link
        href={href}
        className={classes}
        data-slot="button"
        target={target || "_self"}
        {...linkProps}
      />
    )
  }

  // Check if it should use Slot
  const buttonProps = rest as ButtonAsButton
  if ('asChild' in buttonProps && buttonProps.asChild) {
    const { ...slotProps } = buttonProps
    return (
      <Slot
        className={classes}
        data-slot="button"
        {...slotProps}
      />
    )
  }

  // Default: render as button
  const { ...buttonRest } = buttonProps
  return (
    <button
      className={classes}
      data-slot="button"
      {...buttonRest}
    />
  )
}

export { Button, buttonVariants }
