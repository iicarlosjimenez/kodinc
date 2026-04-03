import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Scroll reveal: solo translateY + opacidad 1 siempre.
 * Evita texto invisible en HTML inicial (SEO / LCP). “Fade” perceptual vía movimiento corto.
 */
export default function Reveal({ children }: { children: ReactNode }) {
	const reduceMotion = useReducedMotion();

	if (reduceMotion) {
		return <div className="flex flex-col gap-4">{children}</div>;
	}

	return (
		<motion.div
			className="flex flex-col gap-4 will-change-transform"
			initial={{ y: 14, opacity: 1 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
			transition={{ duration: 0.38, ease: [0.25, 0.1, 0.25, 1] }}
		>
			{children}
		</motion.div>
	);
}
