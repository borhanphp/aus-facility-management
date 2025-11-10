import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = 'https://www.ausfacility.com.au/images/home-1.jpg',
  ogType = 'website',
  canonicalUrl,
  noindex = false,
}) => {
  const siteUrl = 'https://www.ausfacility.com.au';
  const fullTitle = title.includes('AUS') ? title : `${title} | AUS Facility Management`;
  const canonical = canonicalUrl || siteUrl;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="AUS Facility Management" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <meta name="bingbot" content="index, follow" />
          <meta name="yandexbot" content="index, follow" />
        </>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="AUS Facility Management" />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional Meta */}
      <meta name="sitemap" content="https://www.ausfacility.com.au/sitemap.xml" />
      <meta
        name="google-site-verification"
        content="google-site-verification=KVTToUtx8h4av9PVkwJXng5E5NsPhuCX-wD_vXmViiQ"
      />
    </Head>
  );
};
