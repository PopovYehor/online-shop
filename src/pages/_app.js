import { App } from "@/components/App";
import { UserProvider } from "@/providers/UserProvider";
import {Provider} from "react-redux"
import { store } from "@/store/store";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    </Head>
    <UserProvider>
      <Provider store={store}>
          <App>
              <div id="root">
                <Component {...pageProps} />
              </div>
          </App>
      </Provider>
    </UserProvider>
    </>
  );
}

export default MyApp;
