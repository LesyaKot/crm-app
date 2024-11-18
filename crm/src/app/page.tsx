import styles from './page.module.css';
import StatusLabel, { Status } from '@/app/components/status-label';
import AddCompanyButton from '@/app/components/add-company-button';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-xl">Home page</h1>
      {/*<StatusLabel status={Status.Active} disabled={false}>Active</StatusLabel>*/}
      {/*<StatusLabel status={Status.NotActive} disabled={false}>Not Active</StatusLabel>*/}
      {/*<StatusLabel status={Status.Pending} disabled={false}>Pending</StatusLabel>*/}
      {/*<StatusLabel status={Status.Suspended} disabled={false}>Suspended</StatusLabel>*/}

      <AddCompanyButton />
    </main>
  );
}
