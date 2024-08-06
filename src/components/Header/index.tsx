function Header() {
  return (
    <header className="flex-col items-center md:relative md:flex">
      <img src="./src/images/logo.svg"></img>
      <nav>
        <ul>
          <li>
            <a href="#">Créations</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">A propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
