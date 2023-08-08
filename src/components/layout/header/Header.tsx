import Head from 'next/head';
import styles from './PrimaryLayout.module.css';

export interface IHeader {
  children: React.ReactNode;
}

const Header: React.FC<IHeader> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Header Layout</title>
      </Head>
      <div className={styles.main}>{children}</div>
    </>
  );
};

export default Header;
