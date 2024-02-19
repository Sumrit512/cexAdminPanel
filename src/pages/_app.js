
import { SessionProvider } from 'next-auth/react';
import "@/styles/globals.css";
import { Toaster } from 'react-hot-toast';
import Navbar from '@/component/navbar';

export default function App({ Component, pageProps : {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <Toaster/>
      <Navbar/>
        <Component {...pageProps} />
    </SessionProvider>
  )
}
