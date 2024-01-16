import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Hunting Coder</h1>
      <h2>Intoduction</h2>
      <p>
        Hunting Coder is an innovative Next.js application meticulously crafted
        for the vibrant world of coding languages. Serving as a dynamic
        platform, Hunting Coder stands at the intersection of technology and
        knowledge, providing a space where enthusiasts, developers, and coding
        aficionados can converge. This next-generation app is dedicated to
        delivering insightful and engaging blogs that unravel the intricacies of
        various programming languages. With a seamless and intuitive user
        interface, Hunting Coder aims to foster a community where coding
        enthusiasts can explore, learn, and share their experiences in the
        ever-evolving landscape of programming. Dive into the world of Hunting
        Coder and embark on a journey of discovery within the realm of coding
        languages
      </p>
      <h2>Services Offered</h2>
      <p>
        Hunting Coder offers a comprehensive array of services tailored to cater
        to the diverse needs of its users within the coding community. Some key
        services include:
      </p>
      <p>We offer the following services</p>
      <ul>
        <li>In-depth Blogging Platform:</li>
        <li>Interactive Tutorials:</li>
        <li>Community Forums:</li>
        <li>Code Snippet Repository: </li>
        <li>User Profiles and Portfolios:</li>
        <li>Event Calendar:</li>
        <li>Latest Industry News:</li>
      </ul>
      <h2>Contact us</h2>
      <p>
        Visit our website and use the provided contact form to submit your
        inquiries or messages directly. Our team will get back to you promptly.
        We appreciate your interest and look forward to hearing from you at
        Hunting Coder!
      </p>
    </div>
  );
};

export default About;
