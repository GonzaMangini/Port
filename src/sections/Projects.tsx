import { useState } from "react";
import { FaShoppingCart, FaDumbbell, FaArrowRight, FaBook, FaPlus, FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiPostgresql, SiTailwindcss, SiGo, SiDocker, SiTypescript } from "react-icons/si";
import { useScrollSlideIn } from "../hooks/useScrollSlideIn";
import { useScrollFadeInTitle } from "../hooks/useScrollFadeInTitle";

const projects = [
  {
    name: "Ecommerce Eredita",
    description: "Plataforma de ventas con gestión de productos, carrito y pagos integrados. Ideal para emprendedores que buscan vender online sin complicaciones.",
    link: "#", // Agrega aquí tu link
    icon: FaShoppingCart,
    cta: "Explorar Eredita",
    ctaIcon: FaArrowRight,
    technologies: [
      { name: "Go", icon: SiGo, color: "text-cyan-400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "Docker", icon: SiDocker, color: "text-blue-500" }
    ],
    about: "Desarrollé este ecommerce para aprender sobre arquitectura de microservicios y manejo de pagos. El mayor desafío fue implementar un sistema de inventario en tiempo real y la integración con pasarelas de pago seguras.",
    demoLink: "#",
    githubLink: "#"
  },
  {
    name: "Blog de entrenamiento",
    description: "Blog con rutinas personalizadas, consejos de nutrición y seguimiento de progreso para alcanzar tus objetivos fitness.",
    link: "#", // Agrega aquí tu link
    icon: FaDumbbell,
    cta: "Leer el blog",
    ctaIcon: FaBook,
    technologies: [
      { name: "React", icon: SiReact, color: "text-blue-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "text-teal-400" }
    ],
    about: "Creé este blog para combinar mi pasión por el fitness con el desarrollo web. Implementé un sistema de seguimiento de progreso y calculadoras nutricionales. El desafío principal fue crear una experiencia de usuario intuitiva para el seguimiento de rutinas.",
    demoLink: "#",
    githubLink: "#"
  },
];

const EcommerceProject = () => {
  const [showModal, setShowModal] = useState(false);
  const [ref, animationClasses] = useScrollSlideIn<HTMLDivElement>('left');
  const project = projects[0]; // Ecommerce Eredita
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  const IconComponent = project.icon;
  const CtaIconComponent = project.ctaIcon;
  
  return (
    <>
      <div 
        ref={ref}
        className={`bg-[#232b3a]/95 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl p-8 sm:p-12 transition-all duration-700 hover:transform hover:scale-105 border border-gray-700/30 ${animationClasses}`}
      >
        {/* Contenido principal */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
              <IconComponent className="text-2xl text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{project.name}</h3>
              <p className="text-blue-400 font-medium text-xs sm:text-sm uppercase tracking-wider">Proyecto Destacado</p>
            </div>
          </div>
          <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">{project.description}</p>
        </div>
        
        {/* Botones principales */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {project.cta}
            <CtaIconComponent className="text-sm" />
          </a>
          <button
            onClick={toggleModal}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-600/30 sm:w-auto w-full"
            title="Ver información del proyecto"
          >
            <FaPlus className="text-sm" />
            <span className="text-sm font-medium">Info</span>
          </button>
        </div>
      </div>

      {/* Modal overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={toggleModal}>
          <div className="bg-[#1a1f2e] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-600/50 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Header del modal */}
            <div className="flex items-center justify-between p-6 border-b border-gray-600/30">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                  <IconComponent className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{project.name}</h3>
                  <p className="text-blue-400 font-medium text-sm uppercase tracking-wider">Información del Proyecto</p>
                </div>
              </div>
              <button
                onClick={toggleModal}
                className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                title="Cerrar"
              >
                <FaTimes className="text-xl text-gray-400 hover:text-white" />
              </button>
            </div>
            
            {/* Contenido del modal */}
            <div className="p-6 space-y-6">
              {/* Descripción */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Descripción</h4>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
              
              {/* Tecnologías utilizadas */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Tecnologías utilizadas</h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIdx) => {
                    const TechIcon = tech.icon;
                    return (
                      <span key={techIdx} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700/60 rounded-full border border-gray-600/50">
                        <TechIcon className={`text-lg ${tech.color}`} />
                        <span className="text-gray-200 font-medium">{tech.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
              
              {/* Desarrollo del proyecto */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Desarrollo del proyecto</h4>
                <p className="text-gray-300 leading-relaxed">{project.about}</p>
              </div>
              
              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold shadow-lg"
                >
                  <FaExternalLinkAlt className="text-lg" />
                  Ver Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-semibold shadow-lg"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const BlogProject = () => {
  const [showModal, setShowModal] = useState(false);
  const [ref, animationClasses] = useScrollSlideIn<HTMLDivElement>('right');
  const project = projects[1]; // Blog de entrenamiento
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  const IconComponent = project.icon;
  const CtaIconComponent = project.ctaIcon;
  
  return (
    <>
      <div 
        ref={ref}
        className={`bg-[#232b3a]/95 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl p-8 sm:p-12 transition-all duration-700 hover:transform hover:scale-105 border border-gray-700/30 ${animationClasses}`}
      >
        {/* Contenido principal */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
              <IconComponent className="text-2xl text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{project.name}</h3>
              <p className="text-blue-400 font-medium text-xs sm:text-sm uppercase tracking-wider">Proyecto Destacado</p>
            </div>
          </div>
          <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">{project.description}</p>
        </div>
        
        {/* Botones principales */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl transition-all duration-300 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {project.cta}
            <CtaIconComponent className="text-sm" />
          </a>
          <button
            onClick={toggleModal}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-xl transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-600/30 sm:w-auto w-full"
            title="Ver información del proyecto"
          >
            <FaPlus className="text-sm" />
            <span className="text-sm font-medium">Info</span>
          </button>
        </div>
      </div>

      {/* Modal overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={toggleModal}>
          <div className="bg-[#1a1f2e] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-600/50 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Header del modal */}
            <div className="flex items-center justify-between p-6 border-b border-gray-600/30">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                  <IconComponent className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{project.name}</h3>
                  <p className="text-blue-400 font-medium text-sm uppercase tracking-wider">Información del Proyecto</p>
                </div>
              </div>
              <button
                onClick={toggleModal}
                className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
                title="Cerrar"
              >
                <FaTimes className="text-xl text-gray-400 hover:text-white" />
              </button>
            </div>
            
            {/* Contenido del modal */}
            <div className="p-6 space-y-6">
              {/* Descripción */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Descripción</h4>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>
              
              {/* Tecnologías utilizadas */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Tecnologías utilizadas</h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIdx) => {
                    const TechIcon = tech.icon;
                    return (
                      <span key={techIdx} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700/60 rounded-full border border-gray-600/50">
                        <TechIcon className={`text-lg ${tech.color}`} />
                        <span className="text-gray-200 font-medium">{tech.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
              
              {/* Desarrollo del proyecto */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Desarrollo del proyecto</h4>
                <p className="text-gray-300 leading-relaxed">{project.about}</p>
              </div>
              
              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold shadow-lg"
                >
                  <FaExternalLinkAlt className="text-lg" />
                  Ver Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-semibold shadow-lg"
                >
                  <FaGithub className="text-lg" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Projects = () => {
  const [titleRef, isTitleVisible] = useScrollFadeInTitle<HTMLHeadingElement>();
  
  return (
    <section id="projects" className="py-28 px-4 sm:px-10 max-w-6xl mx-auto">
      <h2 
        ref={titleRef}
        className={`text-3xl font-bold text-center mb-20 text-white tracking-wide transition-all duration-1000 ${
          isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        Proyectos
      </h2>
      <div className="grid gap-16 md:grid-cols-2 justify-center max-w-4xl mx-auto">
        <EcommerceProject />
        <BlogProject />
      </div>
    </section>
  );
};

export default Projects;
