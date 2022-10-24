import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Team from "../components/Team";

export default function Home() {
  return (
    <div id="test">
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
      <Footer />
    </div>
  );
}
