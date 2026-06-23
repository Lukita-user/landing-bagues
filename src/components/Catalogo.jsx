import { catalogos } from "../data/catalogos";

function Catalogo() {
  return (
    <section
      id="catalogo"
      className="catalogo"
    >
      <div className="container">

        <h2>Catálogos Bagués</h2>

        {catalogos.map((catalogo) => (
          <div
            key={catalogo.id}
            className="catalogo-card"
          >

            <h3>{catalogo.nombre}</h3>

            <div className="pdf-container">

              <iframe
                src={`${catalogo.pdf}#toolbar=0`}
                title={catalogo.nombre}
                className="pdf"
              />

              <div className="pdf-mobile">

                <img
                  src={catalogo.portada}
                  alt={catalogo.nombre}
                />

                <a
                  href={catalogo.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  Ver catálogo completo
                </a>

              </div>

            </div>

            <div className="catalogo-buttons">

              <a
                href={catalogo.pdf}
                download
                className="btn"
              >
                Descargar
              </a>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Catalogo;