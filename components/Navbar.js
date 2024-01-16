import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
      <ul>
        <Link href="/">
          <Link legacyBehavior>
            <li>Home</li>
          </Link>
        </Link>
        <Link href="/about">
          <Link legacyBehavior>
            <li>About</li>
          </Link>
        </Link>
        <Link href="/blog">
          <Link legacyBehavior>
            <li>Blog</li>
          </Link>
        </Link>
        <Link href="/contact">
          <Link legacyBehavior>
            <li>Contact</li>
          </Link>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
