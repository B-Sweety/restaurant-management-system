import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Sidebar() {
  const router = useRouter();
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
              Dine<span>Ops</span>
            </div>

      <nav className={styles.nav}>
       <div
  className={
    router.pathname === "/" || router.pathname === "/dashboard"
      ? styles.active
      : ""
  }
>
            <Image
            src ="/dashboard.svg"
            alt ="dashboard icon"
            width = {20}
            height ={20}
            className = {styles.dashboardIcon}
            />
            <Link href="/dashboard">Dashboard</Link> 
            </div>

        <div className={router.pathname === "/orders" ? styles.active : ""}>

        <Image 
            src ="/orders.svg"
            alt ="order icon"
            width = {20}
            height ={20}
            className = {styles.dashboardIcon}
            />
        <Link href="/orders">Orders</Link></div>
        
        <div className={router.pathname === "/menu" ? styles.active : ""}>
        <Image 
            src ="/menu.svg"
            alt ="menu icon"
            width = {20}
            height ={20}
            className = {styles.dashboardIcon}
            /><Link href="/menu">Menu</Link>
            </div>
        
        <div className={router.pathname === "/inventory" ? styles.active : ""}>
        <Image 
            src ="/inventory.svg"
            alt ="inventory icon"
            width = {20}
            height ={20}
            className = {styles.dashboardIcon}
            />
            <Link href="/inventory">Inventory</Link></div>
      </nav>
      <div className={styles.note}>
        <div className ={styles.noteh6}>
       <p>A little clarity</p> 
    <p> A better service </p>
        </div>
        <div className={styles.notep}>Every detail of your restaurant,in one place.</div>
        <div className ={styles.note1}>Design Fondation → </div>


      </div>

      <div className={styles.user}>

        <div className={styles.userIcon}>
          👤
        </div>

        <span className={styles.userName}>
          Subhashini
        </span>

      </div>
    </aside>
  );
}