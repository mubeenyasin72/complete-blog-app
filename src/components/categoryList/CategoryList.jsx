import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
const CategoryList = () => {
  const data = [
    {
      id:1,
      img: "/style.png",
      title: "Style",
    },
    {
      id:2,
      img: "/fashion.png",
      title: "Fashion",
    },
    {
      id:3,
      img: "/food.png",
      title: "Food",
    },
    {
      id:4,
      img: "/travel.png",
      title: "Travel",
    },
    {
      id:5,
      img: "/culture.png",
      title: "Culture",
    },
    {
      id:6,
      img: "/coding.png",
      title: "Coding",
    },
  ];
  return (
     <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
