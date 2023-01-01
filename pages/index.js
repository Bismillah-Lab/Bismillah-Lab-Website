import Head from "next/head";
import Banner from "../components/Banner";
import Capabilities from "../components/Capabilities";
import ClientsSays from "../components/ClientsSays";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import Product from "../components/Product";
import Projects from "../components/Projects";
import Services from "../components/Services";
import WorkProcess from "../components/WorkProcess";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bismillah Agency</title>
        <meta name="description" content="Bismillah Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="trustpilot-one-time-domain-verification-id" content="ec4c0499-3ad6-4762-9193-cec5699504c9"/>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <div className="banner-bg">
          <NavBar />
          <Banner />
        </div>
        <Intro />
        <Product />
        <Services />
        <Capabilities />
        <Projects />
        <WorkProcess />
        {/* <ClientsSays /> */}
        
      </main>
    </>
  );
}
