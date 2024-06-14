import styles from "./whatsapp.module.css";
import { FaWhatsapp } from "react-icons/fa";
export default function Whatsapp() {
  return (
    <section className={styles.wrapper}>
      <a href="https://api.whatsapp.com/send/?phone=7975057610&text=Hi,I%20have%20a%20query">
        <FaWhatsapp />
      </a>
    </section>
  );
}
