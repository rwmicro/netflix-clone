import Header from "../components/Header";
import Search from "../components/Search";
import background from "../public/assets/img/tools/index.jpg";
import Head from "next/head";

export default function Accueil() {
  return (
    <>
      <Head>
        <title>Rigflix | Accueil</title>
      </Head>
      <Header />
      <div
        className="w-full bg-black h-screen"
        style={{
          backgroundSize: "cover",
        }}
      >
        <Search />
      </div>
    </>
  );
}
