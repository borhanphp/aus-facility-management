import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { FADE_IN_WHILE_IN_VIEW } from '../constants/animations';
import { IBlogCard } from '../pages/blogs';

export function getBlogImageUrl(image: string) {
  if (!image) return '';
  const domain = 'https://images.ctfassets.net';
  const img = image?.split('//images.ctfassets.net/')[1];
  const imageUrl = `${domain}/${img}`;
  return imageUrl;
}

export const BlogCard = (props: IBlogCard & { index: number }) => {
  const { id, title, thumbnail, tags, shortSummary, index } = props;

  return (
    <Link href={`/blogs/${id}`}>
      <Container {...FADE_IN_WHILE_IN_VIEW({ index, as: motion.a })}>
        <ImageContainer>
          <img src={getBlogImageUrl(thumbnail)} alt={title} />
        </ImageContainer>
        <TagsContainer>{tags?.map((tag: string, index: number) => <span key={index}>{tag}</span>)}</TagsContainer>
        <h3>{title}</h3>
        <p>{shortSummary?.length > 100 ? shortSummary.slice(0, 200) + '...' : shortSummary}</p>
      </Container>
    </Link>
  );
};

const Container = styled.a`
  max-width: 456px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  flex-grow: 1;

  @media (max-width: 960px) {
    max-width: 100%;
    margin: 0 1.5%;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    font-weight: 300;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 342px;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 550px) {
    height: 250px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  span {
    padding: 4px 8px;
    background-color: var(--green-primary);
    color: white;
    font-size: 14px;
    font-weight: 300;
    border-radius: 6px;
  }
`;
