import * as React from 'react'
import { motion, HTMLMotionProps, colors, spring } from '@liquid/tokens'
import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { clsx } from '@liquid/tokens'

const buttonVariants = cva(
  'px-8 rounded-none font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2',
  {
    variants: {
      variant: {
        primary: 'bg-[#E9DAC0] text-[#00050a] hover:opacity-90',
        ghost: 'bg-transparent border border-[#E9DAC0]/20 text-[#E9DAC0] hover:bg-[#E9DAC0]/5',
        outline: 'bg-transparent border border-[#E9DAC0] text-[#E9DAC0] hover:bg-[#E9DAC0] hover:text-[#00050a]',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'ref'>,
  VariantProps<typeof buttonVariants> { }

export const Button = ({
  variant,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.01 }}
      transition={spring.liquid}
      className={twMerge(clsx(buttonVariants({ variant, className })))}
      style={{
        height: '56px',
        fontSize: '16px',
        ...props.style,
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

