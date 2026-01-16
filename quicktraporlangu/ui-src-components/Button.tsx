'use client'

import * as React from 'react'
import { motion, HTMLMotionProps } from '@liquid/tokens'
import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { clsx } from '@liquid/tokens'

const buttonVariants = cva(
  'px-4 py-2 rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-purple-600 text-white hover:bg-purple-500',
        ghost: 'bg-transparent text-purple-400 hover:bg-purple-900/20',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

interface ButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'ref'>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({
  variant,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.02 }}
      className={twMerge(clsx(buttonVariants({ variant, className })))}
      {...props}
    >
      {children}
    </motion.button>
  )
}
