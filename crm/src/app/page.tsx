import styles from './page.module.css';
import AddCompanyButton from '@/app/components/add-company-button';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
    </main>
  );
}
