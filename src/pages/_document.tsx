import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [...React.Children.toArray(initialProps.styles), ...React.Children.toArray(sheet.getStyleElement())],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'AUS Facility Management',
      url: 'https://www.ausfacility.com.au',
      logo: 'https://www.ausfacility.com.au/svg/aus-logo.svg',
      description:
        'Professional facility management services in Sydney including cleaning, pest control, construction, lawn care, and maintenance services.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        areaServed: 'AU',
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sydney',
        addressRegion: 'NSW',
        addressCountry: 'AU',
      },
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: '-33.8688',
          longitude: '151.2093',
        },
        geoRadius: '50000',
      },
    };

    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Organization Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />

          {/* Preconnect to external domains */}
          <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
          
          {/* Preload critical images */}
          <link rel="preload" as="image" href="/images/header-bg.png" />

          {/* Optimized font loading - critical font loaded immediately, others deferred */}
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.1.0/400.min.css"
          />
          
          {/* Defer non-critical font weights */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var fonts = [
                    'https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.1.0/300.min.css',
                    'https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.1.0/500.min.css',
                    'https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.1.0/600.min.css'
                  ];
                  fonts.forEach(function(font) {
                    var link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = font;
                    document.head.appendChild(link);
                  });
                })();
              `,
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
