
import { SessionProvider } from 'next-auth/react';
import "@/styles/globals.css";
import { Toaster } from 'react-hot-toast';
import Navbar from '@/component/navbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ModalProvider } from '@/component/providers/modal-provider';

const queryClient = new QueryClient();

export default function App({ Component, pageProps : {session, ...pageProps} }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider/>
    <SessionProvider session={session}>
      <Toaster/>
      <Navbar/>
        <Component {...pageProps} />
    </SessionProvider>
    </QueryClientProvider>
  )
}
