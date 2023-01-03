import React from 'react';
import PAGE_TRANSITION from '../../../utils/pageTransitionsVars.js';
import {LazyMotion, domAnimation, m} from 'framer-motion';
const pageMotionProps = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: PAGE_TRANSITION.DURATION,
			ease: PAGE_TRANSITION.EASE
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: PAGE_TRANSITION.DURATION,
			delay: PAGE_TRANSITION.DURATION,
			ease: PAGE_TRANSITION.EASE
		}
	}
}

const BLayout = ({children}) => {

	const p = 'b-layout';

	return(
		
		<LazyMotion features={domAnimation}>
		<m.main className={`${p}`} {...pageMotionProps}>
			{children}
		</m.main>
		</LazyMotion>
		);
};

export default BLayout;