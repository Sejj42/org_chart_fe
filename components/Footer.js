import styles from "../styles/Footer.module.css";
import Link from "next/link";
import MyMediaLinks from "./MediaLinks";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright: &copy; Comp Chart 2022</p>
      <br />
      <MyMediaLinks />
      <p>
        <Link href="/about">
          <a>About This Project</a>
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
