import React from 'react'
import { cn } from '@liquid/tokens'
import { cva, type VariantProps } from 'class-variance-authority'

const textVariants = cva('text-foreground', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {}

export const Text = ({ className, size, ...props }: TextProps) => (
  <p className={cn(textVariants({ size, className }))} {...props} />
)
