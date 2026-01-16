'use client';

import React, { useRef } from 'react';
import { motion, type Variants, useInView, spring, transition as transitionToken, type HTMLMotionProps } from '@liquid/tokens';

interface TimelineContentProps extends Omit<HTMLMotionProps<"div">, "children" | "as"> {
    children: React.ReactNode;
    as?: React.ElementType;
    animationNum?: number;
    timelineRef?: React.RefObject<React.ComponentRef<"div">>;
    customVariants?: Variants;
    className?: string;
}

export const TimelineContent = ({
    children,
    as: Component = 'div',
    animationNum = 0,
    timelineRef,
    customVariants,
    className = '',
    ...props
}: TimelineContentProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const defaultVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ...spring.liquid,
                delay: animationNum * 0.1,
                ease: transitionToken.main,
            },
        },
    };

    const MotionComponent = motion(Component);

    return (
        <MotionComponent
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={customVariants || defaultVariants}
            className={className}
            {...props}
        >
            {children}
        </MotionComponent>
    );
};
