import { toast } from 'react-toastify';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { contentfulClient } from '../../contentful';
import { BlogCard } from '../../components/BlogCard';
import { TopHeader } from '../../components/TopHeader';
import MotionWrapper from '../../framer-motion/MotionWrapper';
import { Loader } from '../../components/Loader';
import { SEO } from '../../components/SEO';
import { StructuredData } from '../../components/StructuredData';

export interface IBlogCard {
  id: string;
  title: string;
  thumbnail: string;
  tags: string[];
  shortSummary: string;
}

function formatBlogsData(posts: any[]) {
  const data = posts.map((post: any) => {
    return {
      id: post?.sys?.id,
      title: post?.fields?.title,
      thumbnail: post?.fields?.thumbnail?.fields?.file?.url,
      tags: post?.fields?.tags,
      shortSummary: post?.fields?.shortSummary,
    };
  });
  return data as IBlogCard[];
}

export default function Blogs() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState<IBlogCard[]>([]);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.ausfacility.com.au',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.ausfacility.com.au/blogs',
      },
    ],
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      if (blogs?.length) return;

      setIsLoading(true);
      try {
        const response = await contentfulClient.getEntries({
          limit: 200,
          order: ['-sys.createdAt'],
        });

        setBlogs(formatBlogsData(response?.items));
      } catch (error) {
        console.log({ error });

        toast.error('Something went wrong, please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <SEO
        title="Blog - AUS Facility Management Sydney"
        description="Read the latest articles and insights from AUS Facility Management. Tips on cleaning, pest control, lawn care, facility maintenance, and more for Sydney homes and businesses."
        keywords="Facility Management Blog, Cleaning Tips Sydney, Pest Control Advice, Lawn Care Tips, Home Maintenance Blog Sydney, Facility Services Articles"
        ogImage="https://www.ausfacility.com.au/images/home-4.png"
        canonicalUrl="https://www.ausfacility.com.au/blogs"
      />
      <StructuredData data={breadcrumbSchema} />

      <MotionWrapper>
        <TopHeader>
          <motion.h2>Blog</motion.h2>
        </TopHeader>

        <Container>
          {isLoading ? <Loader /> : blogs?.map((blog, index) => <BlogCard key={blog.id} {...blog} index={index} />)}
        </Container>
      </MotionWrapper>
    </>
  );
}

const Container = styled.div`
  padding: 72px 0;
  max-width: 944px;
  margin: 0 auto;
  min-height: 70vh;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: 1200px) {
    gap: 24px;
  }

  h2 {
    font-size: 56px;
  }
`;
