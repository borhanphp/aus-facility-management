import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';

export const GetFreeQuote = ({ index }: { index?: number }) => {
  const router = useRouter();

  return (
    <motion.button
      {...FADE_IN_WHILE_IN_VIEW({ index: index || 0, as: motion.button })}
      onClick={() => router.push('/contact')}
    >
      GET FREE QUOTE
    </motion.button>
  );
};
