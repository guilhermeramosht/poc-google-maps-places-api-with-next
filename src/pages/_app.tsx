import "@/styles/global.css";
import { CoordinationsContextProvider } from "@/context/CoordinationsContext.context";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <CoordinationsContextProvider>
      <Component {...pageProps} />
    </CoordinationsContextProvider>
  );
}
