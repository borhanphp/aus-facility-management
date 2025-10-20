import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';

interface Props {
  children: React.ReactNode;
  $headerbg?: string;
  $bgposition?: string;
}

export const TopHeader = ({ children, $headerbg, $bgposition }: Props) => {
  return (
    <HeaderContainer $headerbg={$headerbg} $bgposition={$bgposition}>
      <motion.div {...FADE_IN_WHILE_IN_VIEW({ as: motion.div })}>{children}</motion.div>
    </HeaderContainer>
  );
};

export const HeaderContainer = styled.header<Props>`
  padding: 92px 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/header-bg.png');
  ${({ $headerbg }) =>
    $headerbg && `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${$headerbg}');`}
  background-position:
    0 0,
    top 20% left 20%;

  ${({ $bgposition }) => $bgposition && `background-position: 0 0, ${$bgposition};`}

  background-repeat: no-repeat;
  background-size: cover;
  color: white;

  @media (max-width: 960px) {
    padding: 40px 1.5%;
  }

  h2 {
    font-size: 56px;
    font-weight: 600;
    line-height: 70px;
    text-align: center;

    @media (max-width: 960px) {
      font-size: 30px;
      line-height: 40px;
    }

    @media (max-width: 520px) {
      font-size: 24px;
      line-height: 35px;
      font-weight: 500;
    }
  }
`;
