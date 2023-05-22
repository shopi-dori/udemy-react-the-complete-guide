import styles from './Card.module.css';

export function Card({children, title}) {
  return (
    <div className={styles.card}>
      { title ? <h1 className={styles['card-title']}>{title}</h1> : null }

      {children}
    </div>
  );
}