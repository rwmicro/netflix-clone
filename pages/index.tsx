import Head from "next/head";
import Header from "../components/Header";
import background from "../public/assets/img/tools/index.jpg";
import Search from "../components/Search";

export default function Accueil() {
  return (
    <>
      <Head>
        <title>Netflix</title>
      </Head>
      <div
        className="w-full h-screen bg-cover absolute top-0 left-0"
        style={{
          backgroundImage: `url(${background.src})`,
        }}
      >
        <Header />
      <Search />
      </div>
    </>
  );
}
