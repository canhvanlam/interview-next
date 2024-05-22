
import "./globals.css";
import '@/styles/css/app.min.css'
import '@/styles/css/bootstrap.min.css'
import '@/styles/css/icons.min.css'
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';
import ReduxProvider from "@/utils/ReduxProvider"
export const metadata = {
  title: "InterView Next",
  title: "InterView Next",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
        <html lang="en">
        <Script src="/js/bootstrap.bundle.min.js" />
        <body>{children}</body>
      </html>
    </ReduxProvider>
  );
}
