import "../styles/global.css";
import Sidebar from "../../page_components/Sidebar";
import Header from "../../page_components/Header";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Sidebar />

      <main style={{ marginLeft: "240px" }}>
        <Header />

        <div style={{ padding: "100px 30px 30px" }}>
          <Component {...pageProps} />
        </div>
      </main>
    </div>
  );
}