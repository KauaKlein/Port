
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <li style={{
            color: `red`
          }}>
            Portfolio
          </li>
          <li>Kauã Klein</li>
        

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://github.com/KauaKlein"
            target="_blank"
            rel="noopener noreferrer"
          >GitHub</a>

          <a
            href="/src/app/projetos"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >Projetos</a>
        </div>
      </main>
    </div>
  );
}
