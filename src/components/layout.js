import Head from "next/head";

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