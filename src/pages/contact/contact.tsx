import { NextPageWithLayout } from '../page';
import PrimaryLayout from '@/components/layout/main/PrimaryLayout';

const Contact: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Contact</h2>
    </section>
  );
};

export default Contact;

Contact.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
