import styles from "./homepage.module.css";
import Feature from "@/components/features/Feature";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import CategoryList from "@/components/categoryList/CategoryList";
export default function Home() {
  return (
    <div className={styles.container}>
      <Feature />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
