import Head from 'next/head'
import { Home } from "../components/templates/Home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Promo Mania Digital</title>
      </Head>
      <Home />
    </>
  )
}
