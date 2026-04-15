function Catalogo() {
  return (
    <section id="catalogo" className="catalogo">
      <div className="container">
        <h2>Catálogos Bagués</h2>

        <div className="catalogos-grid">

          {/* CATALOGO 1 */}
          <div className="catalogo-card">
            <h3>CATÁLOGO GENERAL</h3>

            <div className="pdf-container">
              {/* PC */}
              <iframe
                src="/catalogo1.pdf#toolbar=0"
                title="Catalogo 1"
                className="pdf"
              ></iframe>

              {/* MOBILE */}
              <div className="pdf-mobile">
                <img src="/catalogo1.jpg" alt="Catálogo General" />

                <a href="/catalogo1.pdf" target="_blank" className="btn">
                  Ver catálogo completo
                </a>
              </div>
            </div>

            <div className="catalogo-buttons">
              <a href="/catalogo1.pdf" target="_blank" className="btn">
                Ver completo
              </a>

              <a href="/catalogo1.pdf" download className="btn">
                Descargar
              </a>
            </div>
          </div>

          {/* CATALOGO 2 */}
          <div className="catalogo-card">
            <h3>CATÁLOGO UNLOCK</h3>

            <div className="pdf-container">
              {/* PC */}
              <iframe
                src="/catalogo2.pdf#toolbar=0"
                title="Catalogo 2"
                className="pdf"
              ></iframe>

              {/* MOBILE */}
              <div className="pdf-mobile">
                <img src="/catalogo2.jpg" alt="Catálogo Unlock" />

                <a href="/catalogo2.pdf" target="_blank" className="btn">
                  Ver catálogo completo
                </a>
              </div>
            </div>

            <div className="catalogo-buttons">
              <a href="/catalogo2.pdf" target="_blank" className="btn">
                Ver completo
              </a>

              <a href="/catalogo2.pdf" download className="btn">
                Descargar
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Catalogo;