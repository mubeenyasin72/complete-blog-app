import React from "react";
import styles from "./pagination.module.css";
const Pagination = ({ page, hasPrev, hasNext }) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        // disabled={!hasPrev}
        // onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        // disabled={!hasNext}
        // onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
