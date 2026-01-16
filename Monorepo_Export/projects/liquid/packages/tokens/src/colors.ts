import { VariantProps } from 'class-variance-authority';
import React from 'react';

export const colors = {
  brand: {
    primary: "#E9DAC0",
    primaryHover: "#D9C9B0",
    primaryFg: "#00050a",
  },
  surface: {
    base: "#00050a",
    muted: "#0a0f14",
    dark: "#000307",
  },
  border: {
    subtle: "rgba(233, 218, 192, 0.1)",
  },
  midnight: "#00050a",
  bonewhite: "#E9DAC0",
}

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
}
