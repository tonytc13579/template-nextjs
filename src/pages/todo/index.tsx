import PrimaryLayout from '@/components/layout/main/PrimaryLayout';
import { NextPageWithLayout } from '@/pages/page';
import styles from './todo.module.css';
import Link from 'next/link';

const TODO: NextPageWithLayout = () => {
  return (
    <section>
      <h2>TO DO</h2>
      <div className={styles.container}></div>
      <Link href="/" className={styles.backButton}>
        Back NOW
      </Link>
    </section>
  );
};

export default TODO;

TODO.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
