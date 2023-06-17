import Link from "next/link";

var anneeactuelle = new Date().getFullYear();

const Footer = () => {
  function retourtop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <footer>
      <div className="w-full bg-gray800 h-2 float-left">
        <ul className="float-left m-56 ">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/Films">Films</Link>
          </li>
          <li>
            <Link href="/Series">Series</Link>
          </li>
          <li>
            <Link href="/connexion">Connexion</Link>
          </li>
        </ul>
        <div className="footer-div-crypto">
          <ul>
            <img src="/assets/img/tools/bitcoin.png"></img>
            <li>
              Donation Bitcoin : <a href="/bitcoin:"></a>
            </li>
          </ul>
        </div>
        <button onClick={retourtop} title="Aller en haut">
          <img src="/assets/img/tools/boutton-top.png"></img>
        </button>
      </div>
      <div className="footer-end">
        <h5>
          Rigflix © 2020 - {anneeactuelle} - Aucun medias ne sont uploadés sur
          ce site.
        </h5>
        <p className="p-header-end">
          <span className="fab fa-cc-visa" aria-hidden="true"></span>
          <span className="fab fa-cc-mastercard" aria-hidden="true"></span>
          <span className="fab fa-bitcoin" aria-hidden="true"></span>
          <span className="fab fa-cc-amex" aria-hidden="true"></span>
          <span className="fa-brands fa-ethereum"></span>
          <span className="fab fa-cc-paypal" aria-hidden="true"></span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
