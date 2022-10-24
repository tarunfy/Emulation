import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Join from "../components/Join";
import Team from "../components/Team";

export default function Home() {
  return (
    <div className="bg-hero-pattern">
      <Head>
        <title>Emulation || Club for programmers of accurate college</title>
        <meta
          name="description"
          content="Technical club of AIMT greater noida."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <Team />
      <Join />
      <Footer />
    </div>
  );
}
