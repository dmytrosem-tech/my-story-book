import styles from "./NavigationItem.module.css";

export default function NavigationItem({ text, icon }) {
  return (
    <li className={styles.item}>
      {icon}
      {text}
    </li>
  );
}
