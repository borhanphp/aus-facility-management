import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { Loader } from '../../components/Loader';
import { contentfulClient } from '../../contentful';
import { TopHeader } from '../../components/TopHeader';
import { getBlogImageUrl } from '../../components/BlogCard';
import MotionWrapper from '../../framer-motion/MotionWrapper';
import { SEO } from '../../components/SEO';
import { StructuredData } from '../../components/StructuredData';

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      return <img src={getBlogImageUrl(node.data.target.fields.file.url)} alt={node.data.target.fields.title} />;
    },
  },
};
function formatPostData(post: any) {
  return {
    id: post?.sys?.id,
    title: post?.fields?.title,
    thumbnail: getBlogImageUrl(post?.fields?.thumbnail?.fields?.file?.url),
    tags: post?.fields?.tags,
    shortSummary: post?.fields?.shortSummary,
    mainContent: documentToReactComponents(post?.fields?.mainContent, options),
    createdAt: post?.sys?.createdAt,
    updatedAt: post?.sys?.updatedAt,
  } as const;
}

export default function Blog() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState<ReturnType<typeof formatPostData>>();

  const blogId = (router.query?.blogId as string) || '';

  useEffect(() => {
    if (!blogId) return;

    const fetchBlog = async () => {
      try {
        setIsLoading(true);
        const blog = await contentfulClient.getEntry(blogId);
        console.log(blog);
        setBlog(formatPostData(blog));
      } catch (error) {
        console.log({ error });

        toast.error('Something went wrong, please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  const blogPostingSchema = blog
    ? {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: blog.title,
        image: blog.thumbnail,
        datePublished: blog.createdAt,
        dateModified: blog.updatedAt,
        author: {
          '@type': 'Organization',
          name: 'AUS Facility Management',
          url: 'https://www.ausfacility.com.au',
        },
        publisher: {
          '@type': 'Organization',
          name: 'AUS Facility Management',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.ausfacility.com.au/svg/aus-logo.svg',
          },
        },
        description: blog.shortSummary,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.ausfacility.com.au/blogs/${blogId}`,
        },
      }
    : null;

  const breadcrumbSchema = blog
    ? {
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
          {
            '@type': 'ListItem',
            position: 3,
            name: blog.title,
            item: `https://www.ausfacility.com.au/blogs/${blogId}`,
          },
        ],
      }
    : null;

  return (
    <>
      {blog && (
        <>
          <SEO
            title={`${blog.title} | AUS Facility Management Blog`}
            description={blog.shortSummary}
            keywords={blog.tags?.join(', ') || 'Facility Management, Sydney Services'}
            ogImage={blog.thumbnail}
            ogType="article"
            canonicalUrl={`https://www.ausfacility.com.au/blogs/${blogId}`}
          />
          {blogPostingSchema && <StructuredData data={blogPostingSchema} />}
          {breadcrumbSchema && <StructuredData data={breadcrumbSchema} />}
        </>
      )}

      <MotionWrapper>
        <TopHeader>
          <motion.h2>Blog</motion.h2>
        </TopHeader>

        {isLoading && (
          <Container>
            <Loader />
          </Container>
        )}

        {!isLoading && blog?.title && blog?.thumbnail && blog?.shortSummary && (
          <Container>
            <TitleWrapper>
              <h2>{blog?.title}</h2>
              <p>Published on {format(blog?.createdAt, 'dd MMM yyyy')}</p>
            </TitleWrapper>
            <img src={blog?.thumbnail} alt={blog?.title} />
            {/* <p>{blog?.shortSummary}</p> */}

            <MainContentWrapper>{blog?.mainContent}</MainContentWrapper>
          </Container>
        )}
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

  @media (max-width: 960px) {
    gap: 24px;
    padding: 40px 1.5%;
  }

  & > img {
    margin-bottom: 40px;

    @media (max-width: 960px) {
      margin-bottom: 24px;
    }
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 12px;
  }
`;

const TitleWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: 960px) {
    margin-bottom: 24px;
  }

  h2 {
    font-size: 48px;
    font-weight: 400;
    margin-bottom: 16px;

    @media (max-width: 960px) {
      font-size: 30px;
      margin-bottom: 5px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 300;
    color: #585858;
  }
`;

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  a {
    color: #0077ff;
    text-decoration: underline;
  }
`;
