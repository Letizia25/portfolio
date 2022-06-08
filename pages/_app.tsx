import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
<Link href="/"> Home </Link>
<Link href="/about">About me </Link>
<Link href="/studio1/feedback">Feedback Studio 1 </Link>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
