import type { AppProps } from "next/app";
import "../styles/globals.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="p-10">
      <Component {...pageProps} />
    </div>
  );
}
