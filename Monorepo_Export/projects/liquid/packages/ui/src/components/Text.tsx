import { cn } from '@liquid/tokens'
import { cva } from 'class-variance-authority'
import { TextProps } from 'packages/tokens/src/colors'
import { ButtonProps } from 'packages/tokens/src/colors'

export const textVariants = cva('text-foreground', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const Text = ({ className, size, ...props }: TextProps) => (
  <p className={cn(textVariants({ size, className }))} {...props} />
)

export const Button = ({ className, size, ...props }: ButtonProps) => (
  <button className={cn(textVariants({ size, className }))} {...props} />
)
