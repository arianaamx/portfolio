import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Timeline from "src/components/timeline";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Ariana Milašinčić</h1>
        <Timeline />
      </main>
    </div>
  );
};

export default Home;
