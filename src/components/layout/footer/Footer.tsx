import Head from 'next/head';
import styles from './Footer.module.css';

export interface IFooter {
  children: React.ReactNode;
}

const Footer: React.FC<IFooter> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Footer Layout</title>
      </Head>
      <div className={styles.main}>{children}</div>
    </>
  );
};

export default Footer;
