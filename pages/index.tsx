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
        className="accueil"
        style={{
          backgroundImage: background,
          backgroundSize: "cover",
          height: 1920,
        }}
      >
        <Search />
      </div>
    </>
  );
}
