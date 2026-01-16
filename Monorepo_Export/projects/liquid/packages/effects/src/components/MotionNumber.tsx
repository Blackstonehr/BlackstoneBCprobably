import { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue, useInView, spring as springToken } from '@liquid/tokens';

interface MotionNumberProps {
    value: number;
    duration?: number;
    className?: string;
}

export const MotionNumber = ({
    value,
    duration = 2,
    className
}: MotionNumberProps) => {
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, springToken.liquid);
    const displayValue = useTransform(springValue, (latest) =>
        latest % 1 === 0 ? Math.round(latest) : latest.toFixed(1)
    );
    const ref = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [value, motionValue, isInView]);

    useEffect(() => {
        return displayValue.on('change', (latest) => {
            if (ref.current) {
                ref.current.textContent = latest.toString();
            }
        });
    }, [displayValue]);

    return (
        <span ref={containerRef} className={className}>
            <span ref={ref}>0</span>
        </span>
    );
};
