
import "./globals.css";
import ReduxProvider from "../ReduxProvider";
import '@/styles/css/app.min.css'
import '@/styles/css/bootstrap.min.css'
import '@/styles/css/icons.min.css'
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';
export const metadata = {
  title: "InterView Next",
  title: "InterView Next",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
        <html lang="en">
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
        <body>{children}</body>
      </html>
    </ReduxProvider>
  );
}
