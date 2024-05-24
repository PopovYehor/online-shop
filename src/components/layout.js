import Head from "next/head";
import { metadata } from './../pages/_app';

export default function Layout ({ children }) {
    return (
      <>
      <Head>
        <title>Leoshop</title>
        <meta name="title" content="Leoshop" />
      </Head>
      <div>
            {children}
      </div>
      </>
    );
};