import PrimaryLayout from '@/components/layout/main/PrimaryLayout';
import SidebarLayout from '@/components/sidebar_/SidebarLayout';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from '../page';
import { useEffect } from 'react';

const Home: NextPageWithLayout = () => {
  useEffect(() => {
    console.log('[Screen Home] [useEffect] render');
  }, []);

  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
