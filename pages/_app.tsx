import type { AppProps } from "next/app";
import "../src/styles.scss";
import "../src/styles/first-page.scss";
import "../src/styles/navbar.scss";
import "../src/styles/footer.scss";
import "../src/styles/experience.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
