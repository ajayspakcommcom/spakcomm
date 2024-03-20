import React from 'react';
import Head from "next/head";

interface SEOProps {
  pageTitle?: string;
  description?: string;
  keywords?: string;
  author?: string;
}


const SEO: React.FC<SEOProps> = ({ pageTitle, description, keywords, author }) => (
  <>
    <Head>
      <title> {pageTitle} </title>
      <meta charSet="UTF-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://www.example.com/image.jpg" />
      <meta property="og:url" content="https://www.example.com/page" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@yourtwitterhandle" />

    </Head>
  </>
);

export default React.memo(SEO);