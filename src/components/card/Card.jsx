import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="blogs" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 -{" "}</span>
          <span className={styles.category}>CODING</span>
        </div>
        <Link href="/">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          consequuntur delectus quas eaque quae dicta ipsa, quidem, perspiciatis
          excepturi voluptatum accusamus ex aliquam harum sed quos dolorum totam
          illo quam.
        </p>
        <Link href="/" className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
