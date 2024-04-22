import "./index.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="box_footer">
      <span className="text">
        © {year} Samira ferreira. Todos os direitos reservados.
      </span>
    </div>
  );
}

export default Footer;
