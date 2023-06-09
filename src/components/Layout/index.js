import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
    }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}