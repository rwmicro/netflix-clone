import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../public/assets/img/tools/logo.png'

export default function Header(){
  const url = useRouter();
  return (
    <>
    <header className={url.pathname === "/" ? "main-header" : "header"}>
      <Link href="/" legacyBehavior>
        <a>
        <img src="/assets/img/tools/logo.png" alt="logo" className="logo" />
        </a>
      </Link>
      <nav className="nav">
        <Link href="/" className={(nav) => (nav.isActive ? "nav-active" : "")} legacyBehavior>
          <a> 
            <img 
              src="/assets/img/tools/logo-maison.png" 
              alt="Accueil"
            />
            Accueil
          </a>
        </Link>

        <Link
          href="/Films"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
          legacyBehavior
        >
          <a>
          <img src="/assets/img/tools/logo-film.png" alt="Films"></img>
          Films 
          </a>
        </Link>
        <Link
          href="/Series"
          className={(nav) => (nav.isActive ? "nav-active" : "")} legacyBehavior>

          <a>
          <img src="/assets/img/tools/logo-serie.png" alt="Series"></img>
          Series
          </a>
        </Link>
      </nav>
      <Link href="/Login"><button>S'identifier</button></Link>
    </header>
    </>
  );
};