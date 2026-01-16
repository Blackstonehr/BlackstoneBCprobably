import React from 'react'
import { cn } from '@liquid/tokens'

export const Box: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn(className)} {...props} />
