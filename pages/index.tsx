import Head from "next/head";
import Header from "../components/main/Header";
import Search from "../components/index/Search";
import background from 'public/assets/img/tools/index.jpg'

export default function Accueil() {
  return (
    <>
      <Head>
        <title>Netflix</title>
      </Head>
      <div
        className="hidden sm:block w-full h-screen bg-cover absolute top-0 left-0 index"
      >
        <Header />
      <Search />
      </div>
      <div className="min-h-screen w-full sm:hidden">
        <Header />
        <p className="absolute left-1/2 top-1/2 text-center -translate-x-1/2 -translate-y-1/2 text-white">Please view this site on a computer</p>
      </div>
    </>
  );
}
