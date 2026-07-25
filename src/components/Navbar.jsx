function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#inicio" className="navbar-logo">
          MOTIVACION BAGUĒS
        </a>

        <div className="navbar-links">

          <a href="#inicio">
            Inicio
          </a>

          <a href="#catalogo">
            Catálogos
          </a>

          <a href="#tutoriales">
            Tutoriales
          </a>

          <a href="#beneficios">
            Beneficios
          </a>

          <a href="#como-trabajamos">
            Cómo Trabajamos
          </a>

          <a
            href="https://www.mireb.bagues.com.ar/#!/"
            target="_blank"
            rel="noreferrer"
            className="navbar-whatsapp"
          >
            MiReb (EMPRENDEDORES)
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar; 