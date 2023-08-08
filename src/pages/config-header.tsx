import { CDN_URL } from '@/configs';
import { SEO_DESCRIPTION, SEO_IMAGE, SEO_TITLE } from '@/constants/seo';
import Head from 'next/head';

export default function ConfigHeader(props: any) {
  const { seoInfo = {} } = props;
  const { title, description, image, favicon } = seoInfo;
  return (
    <Head>
      <title>{title ?? SEO_TITLE}</title>
      <meta property="og:title" content={title ?? SEO_TITLE} />
      <meta property="og:description" content={description ?? SEO_DESCRIPTION} />
      <meta property="og:image" content={image ?? SEO_IMAGE} />
      <meta property="og:type" content="website" />
      <meta property="twitter:title" content={title ?? SEO_TITLE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description ?? SEO_DESCRIPTION} />
      <meta name="twitter:image" content={image ?? SEO_IMAGE} />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <meta name="theme-color" content="#ffffff"></meta>
      <link
        rel="icon"
        type="image/svg"
        sizes="16x16 32x32"
        href={favicon ?? `${CDN_URL}/icons/bitcoin-city-favicon.svg`}
      />
      <link
        rel="apple-touch-icon"
        sizes="16x16 32x32"
        href={favicon ?? `${CDN_URL}/icons/bitcoin-city-favicon.svg`}
      />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
    </Head>
  );
}
