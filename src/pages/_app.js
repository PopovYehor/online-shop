import { App } from "@/components/App";
import { UserProvider } from "@/providers/UserProvider";
import {Provider} from "react-redux"
import { store } from "@/store/store";
import Head from "next/head";
import "@/styles/globals.css"
import {Inter} from "@next/font/google"

const inter = Inter({
  weight:['400'],
  style: ['normal'],
  subsets:['latin']
})

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    </Head>
    <UserProvider>
      <Provider store={store}>
          <App>
              <div id="root" className={inter.className}>
                <Component {...pageProps} />
              </div>
          </App>
      </Provider>
    </UserProvider>
    </>
  );
}

export default MyApp;
