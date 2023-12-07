import "./Info.css";

import styles from "./Info.module.css"; // wirken nur in Info.js

console.log(styles);

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hi from Info component</h1>
      <button className={styles.myOtherButton}>Click me in Info.js</button>
    </div>
  );
}

export default Info;
