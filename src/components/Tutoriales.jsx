import TutorialCard from "./TutorialCard";
import { tutoriales } from "../data/tutoriales";

function Tutoriales() {
  return (
    <section
      id="tutoriales"
      className="tutoriales"
    >
      <div className="container">

        <h2>Capacitaciones</h2>

        <p className="section-description">
          ¡Material creado para ayudarte a comenzar,
          vender más y crecer dentro de Motivación Bagués!
        </p>

        <div className="tutoriales-grid">

          {tutoriales.map((tutorial) => (
            <TutorialCard
              key={tutorial.id}
              tutorial={tutorial}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Tutoriales;