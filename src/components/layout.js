import Head from "next/head";

export default function Layout ({ children }) {
    return (
      <>
      <Head>
        <title>Leoshop</title>
        <meta name="title" content="Leoshop" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div>
            {children}
      </div>
      </>
    );
};