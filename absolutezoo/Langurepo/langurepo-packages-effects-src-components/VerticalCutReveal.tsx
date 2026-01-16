import React from 'react';
import { motion, Variants, Transition, cn, spring } from '@liquid/tokens';

interface VerticalCutRevealProps {
    children: string;
    splitBy?: 'words' | 'characters';
    staggerDuration?: number;
    staggerFrom?: 'first' | 'last' | 'center';
    reverse?: boolean;
    containerClassName?: string;
    wordClassName?: string;
    transition?: Transition;
}

export const VerticalCutReveal = ({
    children,
    splitBy = 'words',
    staggerDuration = 0.1,
    staggerFrom = 'first',
    reverse = false,
    containerClassName = '',
    wordClassName = '',
    transition = spring.liquid,
}: VerticalCutRevealProps) => {
    const elements = splitBy === 'words' ? children.split(' ') : children.split('');

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDuration,
                staggerDirection: reverse ? -1 : 1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: '100%' },
        visible: {
            y: 0,
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={cn("flex flex-wrap", containerClassName)}
        >
            {elements.map((el, i) => (
                <span
                    key={i}
                    className={cn("relative overflow-hidden inline-block", wordClassName)}
                    style={{ whiteSpace: splitBy === 'words' ? 'pre' : 'normal' }}
                >
                    <motion.span
                        variants={itemVariants}
                        transition={transition}
                        className="inline-block"
                    >
                        {el}{splitBy === 'words' && i !== elements.length - 1 ? ' ' : ''}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    );
};
