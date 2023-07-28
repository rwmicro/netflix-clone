import Head from "next/head";
import Header from "../components/Header";
import background from "../public/assets/img/tools/index.jpg";
import Search from "../components/Search";

export default function Accueil() {
  return (
    <>
      <Head>
        <title>Rigflix | Accueil</title>
      </Head>
      <Header />
      <div
        className="w-full h-screen"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${background.src})`,
        }}
      >
      <Search />
      </div>
    </>
  );
}
