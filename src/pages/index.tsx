import PrimaryLayout from '@/components/layout/main/PrimaryLayout';
import SidebarLayout from '@/components/sidebar_/SidebarLayout';
import styles from './Home.module.scss';
import { NextPageWithLayout } from './page';
import { useEffect } from 'react';

const Home: NextPageWithLayout = () => {
  console.log('[Home] RENDER ');
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
