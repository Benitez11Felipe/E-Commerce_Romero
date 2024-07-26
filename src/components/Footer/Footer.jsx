import "../Footer/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <img className="imgFooter" src="/src//images/icono/icono.jpg" alt="" />
        <ul className="footer-menu-container">
          <li className="menu-item">Legal</li>
          <li className="menu-item">Cookies</li>
          <li className="menu-item">Privacy</li>
          <li className="menu-item">Shipping</li>
          <li className="menu-item">Refounds</li>
        </ul>
        <span className="copyright">
          &copy;2021. Krey Academy. All rights reserved.
        </span>
      </footer>
    </>
  );
}

export default Footer;
