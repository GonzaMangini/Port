import { useScrollFadeInTitle } from "../hooks/useScrollFadeInTitle";

const Home = () => {
  const [h1Ref, h1Visible] = useScrollFadeInTitle<HTMLHeadingElement>();
  const [pRef, pVisible] = useScrollFadeInTitle<HTMLParagraphElement>();
  return (
    <div className="animated-title fade-in-up min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="w-48 h-48 md:w-64 md:h-64 profile-img-wrapper mb-10">
        <img
          src="/FTcarnet.png"
          alt="Foto de Gonzalo"
          className="profile-img"
        />
      </div>
      <h1
        ref={h1Ref}
        className={`fade-in-down-scroll text-xl md:text-6xl font-bold photoshop-title-style${h1Visible ? ' is-visible' : ''}`}
      >
        ¡Hola! Soy Gonzalo
      </h1>
      <p
        ref={pRef}
        className={`fade-in-down-scroll mt-4 text-base md:text-xl text-gray-200 max-w-2xl mb-2${pVisible ? ' is-visible' : ''}`}
      >
        Busco mi primera oportunidad como desarrollador junior para aplicar lo aprendido, seguir creciendo profesionalmente y aportar en proyectos reales dentro de un equipo de trabajo.
      </p>
      <div className="md:w-1/2 flex justify-center"></div>
    </div>
  );
};

export default Home