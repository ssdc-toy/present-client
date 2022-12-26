import { Noto_Sans_KR } from "@next/font/google";
import { Layout } from "components";
import "../styles/globals.css";

const notoSans = Noto_Sans_KR({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <style jsx global>{`
        html {
          font-family: ${notoSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  );
}
