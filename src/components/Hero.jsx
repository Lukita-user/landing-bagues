function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <img src="/logo.webp" alt="Motivación Bagués" className="logo" />

        <div className="hero-buttons">
          <a href="#catalogo" className="btn">
            Ver catálogo
          </a>

          <a
            href="https://wa.me/5491134705433"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Quiero vender/comprar
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;