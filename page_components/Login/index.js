

import { useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <main className={styles.page}>
      <section className={styles.loginCard}>
        
        <div className={styles.heroSection}>
          <img
            src="/hero.svg"
            alt="Dine Ops restaurant illustration"
            className={styles.heroImage}
          />
        </div>

      
        <div className={styles.formSection}>
          <div className={styles.formContent}>
            <div className={styles.logo}>
              Dine<span>Ops</span>
            </div>

            <h1>Welcome back</h1>

            <p className={styles.subtitle}>
              Sign in to manage your restaurant
            </p>

            <form onSubmit={handleLogin} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className={styles.options}>
                <label className={styles.remember}>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  className={styles.forgotPassword}
                >
                  Forgot password?
                </button>
              </div>

              <button type="submit" className={styles.loginButton}>
                Sign in to your workspace →
              </button>
            </form>

            <p className={styles.footerText}>
              Restaurant Management System
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}