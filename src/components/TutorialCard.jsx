function TutorialCard({ tutorial }) {
  return (
    <div className="tutorial-card">

      <video
        className="tutorial-video"
        controls
        preload="metadata"
      >
        <source
          src={tutorial.video}
          type="video/mp4"
        />

        Tu navegador no soporta videos.
      </video>

      <div className="tutorial-content">

        <h3>{tutorial.titulo}</h3>

        <p>{tutorial.descripcion}</p>

      </div>

    </div>
  );
}

export default TutorialCard;