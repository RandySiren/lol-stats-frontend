import type { NextPage } from "next";
import Head from "next/head";
import HomeView from "../views/HomeView/HomeView";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LoL Stats App</title>
        <meta name="description" content="LoL stats app by Mandeep Sran" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeView />
    </>
  );
};

export default Home;
