import { ReactNode } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

const MotionWrapper = ({ children }: Props) => {
  return (
    <Container
      as={motion.div}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {children}
    </Container>
  );
};

const Container = styled(motion.div)`
  & > * {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export default MotionWrapper;
