import Logo from "../../assets/logo.svg";

function Footer() {
  return (
    <footer className="bg-white border-t-2 border-t-primary-isabelline-dark flex align-center justify-center p-10">
      <h6>Réalisé par </h6>
      <a
        target="_blank"
        className=" ml-1 underline"
        href="https://natacharome.fr"
      >
        Natacha Rome
      </a>
    </footer>
  );
}

export default Footer;
