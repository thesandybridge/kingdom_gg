import styles from "./Footer.module.css";

export default function Footer() {
  const date = new Date();
  return (
    <footer className={styles.footer}>
      <p>&copy; {date.getFullYear()} kingdomgaming.gg | All Rights Reserved.</p>
    </footer>
  );
}
