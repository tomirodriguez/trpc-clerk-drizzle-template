import "@/styles/globals.css";
import { api } from "@/utils/api";
import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
