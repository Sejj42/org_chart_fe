import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import styles from "../styles/Header.module.css";
// import Search from "./Search";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Comp Chart</a>
        </Link>
        {user ? (
          <span style={{ color: "black", textTransform: "none", fontSize: 16 }}>
            Oh why hello, {user}!
          </span>
        ) : null}
      </div>
      {/* <Search /> */}
      <nav>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <button
                  onClick={() => logout()}
                  className="btn-secondary btn-icon"
                >
                  <FaSignOutAlt /> Log Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/account/login">
                  <a className="btn-secondary btn-icon">
                    <FaSignInAlt /> Login
                  </a>
                </Link>
              </li>
            </>
          )}
          <></>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
