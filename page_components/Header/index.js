import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

export default function Header() {
  const [isServiceOpen, setIsServiceOpen] = useState(true);
  const router = useRouter();

  const pageNames = {
    "/dashboard": "Dashboard",
    "/orders": "Orders",
    "/menu": "Menu",
    "/inventory": "Inventory",
  };

  const currentPage = pageNames[router.pathname] || "DineOps";

  const today = new Date();

  const currentDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        Dine<span>Ops</span> / {currentPage}
      </div>

      <div className={styles.service}>
        <div>
            <p className={styles.date}>
              {currentDate}
            </p>
          </div>

        <div className={styles.serviceInfo}>
          
          <div
            className={`${styles.statusDot} ${
              isServiceOpen ? styles.open : styles.closed
            }`}
          ></div>

          <div>
            <p className={styles.serviceStatus}>
              Service {isServiceOpen ? "open" : "closed"}
            </p>

            
          </div>
          
        </div>

        <button
          className={styles.serviceButton}
          onClick={() => setIsServiceOpen(!isServiceOpen)}
        >
          {isServiceOpen ? "Close Service" : "Open Service"}
        </button>

      </div>

    </header>
  );
}