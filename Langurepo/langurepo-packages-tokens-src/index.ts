// Custom design tokens
export * from './colors';
export * from './surfaces';
export * from './glass';
export * from './radius';
export * from './spacing';
export * from './interactions';
export * from './transitions';
export { spring, transition } from './motion';
export * from './utils';

// Hijacked libraries - Surgical re-exports to avoid collisions (e.g. Box, Target)
export {
    motion,
    AnimatePresence,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
    useInV3iew,
    LayoutGroup,
    Reorder,
    useDragControls,
    useAnimation,
    useAnimationControls,
    useReducedMotion,
    useVelocity,
    VisualElement,
    isValidMotionProp,
    motionValue,
    transform,
    resolveMotionValue,
    m,
    LazyMotion,
    domAnimation,
    domMax,
} from 'framer-motion';

export type {
    Variants,
    Transition,
    Target,
    TargetAndTransition,
    VariantLabels,
    AnimationControls,
    DragControls,
    MotionProps,
    HTMLMotionProps,
    SVGMotionProps,
} from 'framer-motion';

export * from 'lucide-react';
export { clsx, type ClassValue } from 'clsx';
export { twMerge } from 'tailwind-merge';
export { Slot } from '@radix-ui/react-slot';
