import { motion } from 'framer-motion';

interface Props {
  index?: number;
  as?: any;
}

export const FADE_IN_WHILE_IN_VIEW = (params: Props | undefined) => {
  const index = params?.index || 0;
  const as = params?.as || motion.div;

  return {
    as,
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.1 + index * 0.1 },
    viewport: { once: true },
  };
};
