const beneficios = [
  {
    titulo: "📱 Desde tu celular",
    texto: "Manejás tu negocio desde cualquier lugar."
  },
  {
    titulo: "📦 Sin stock",
    texto: "Vendés primero y luego realizás el pedido."
  },
  {
    titulo: "💰 Ganancias",
    texto: "Productos con excelente rotación."
  },
  {
    titulo: "🎓 Capacitación",
    texto: "Aprendizaje constante."
  },
  {
    titulo: "🤝 Acompañamiento",
    texto: "Siempre contarás con ayuda."
  },
  {
    titulo: "👭 Comunidad",
    texto: "Formás parte de una red activa."
  },
  {
    titulo: "🚀 Liderazgo",
    texto: "Posibilidad de desarrollar tu equipo."
  },
  {
    titulo: "💖 Crecimiento",
    texto: "Desarrollo personal y profesional."
  }
];

function Beneficios() {
  return (
    <section
      id="beneficios"
      className="beneficios"
    >
      <div className="container">

        <h2>
          Beneficios de formar parte
        </h2>

        <div className="beneficios-grid">

          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="beneficio-card"
            >
              <h3>{beneficio.titulo}</h3>

              <p>{beneficio.texto}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Beneficios;