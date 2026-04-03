import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Hero: sin opacity 0 en el H1 (mejor LCP). Solo entrada corta en Y.
 */
export default function HeroIntro({ children }: { children: ReactNode }) {
	const reduceMotion = useReducedMotion();

	if (reduceMotion) {
		return <>{children}</>;
	}

	return (
		<motion.div
			initial={{ y: 16, opacity: 1 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.42, ease: [0.25, 0.1, 0.25, 1] }}
		>
			{children}
		</motion.div>
	);
}
