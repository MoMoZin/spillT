import Layout from '@/components/Layout';
import '@/styles/globals.css';
import '@/styles/messages.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Layout> <Component {...pageProps} /></Layout>;
}
