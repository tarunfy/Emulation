import Head from "next/head";
import { About, Team, Join, Footer, Header } from "../components";

export default function Home() {
  return (
    <div className="bg-hero-pattern w-auto">
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
