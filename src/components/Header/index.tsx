import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="flex items-center justify-between sticky top-0 w-full bg-opacity-70 border-b bg-primary-isabelline-light backdrop-blur border-b-primary-isabelline-dark p-2 px-10">
      <img alt="logo" className="h-16 ml-4" src={Logo} />
      <nav className="flex">
        <ul>
          <li>
            <a
              href="#realisations"
              className="hover:border-b-4 hover:border-secondary p-3 active:border-secondary"
            >
              Réalisations
            </a>
          </li>
        </ul>
        <ul className="ml-5">
          <li>
            <a
              href="#about"
              className="hover:border-b-4 hover:border-secondary p-3 active:border-secondary"
            >
              A propos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
