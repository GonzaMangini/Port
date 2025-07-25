import { SiJavascript, SiTypescript, SiNodedotjs, SiMysql, SiGo, SiHtml5, SiCss3, SiGit, SiGoogledrive, SiAdobephotoshop } from "react-icons/si";
import { FaNetworkWired, FaMicrochip, FaProjectDiagram, FaFileWord, FaFileExcel, FaEllipsisV } from "react-icons/fa";

const autodidactaTabs = [
  { name: 'Lenguajes', icons: [
    { title: 'JavaScript', class: 'text-yellow-400', icon: <SiJavascript /> },
    { title: 'TypeScript', class: 'text-blue-500', icon: <SiTypescript /> },
    { title: 'Node.js', class: 'text-green-600', icon: <SiNodedotjs /> },
    { title: 'SQL', class: 'text-blue-700', icon: <SiMysql /> },
    { title: 'Go', class: 'text-cyan-500', icon: <SiGo /> },
    { title: 'HTML5', class: 'text-orange-500', icon: <SiHtml5 /> },
    { title: 'CSS3', class: 'text-blue-400', icon: <SiCss3 /> },
  ]},
  { name: 'Herramientas', icons: [
    { title: 'Git', class: 'text-orange-600', icon: <SiGit /> },
  ]},
  { name: 'Plataformas', icons: [
    { title: 'Excel', class: 'text-green-700', icon: <FaFileExcel /> },
    { title: 'Word', class: 'text-blue-800', icon: <FaFileWord /> },
    { title: 'Google Drive', class: 'text-green-400', icon: <SiGoogledrive /> },
    { title: 'Photoshop', class: 'text-blue-400', icon: <SiAdobephotoshop /> },
  ]},
  { name: 'Conocimientos', icons: [
    { title: 'Redes', class: 'text-indigo-500', icon: <FaNetworkWired /> },
    { title: 'Hardware', class: 'text-gray-500', icon: <FaMicrochip /> },
    { title: 'Metodologías Ágiles', class: 'text-pink-400', icon: <FaProjectDiagram /> },
  ]},
];

import { useState } from "react";
import { useScrollFadeInTitle } from "../hooks/useScrollFadeInTitle";
import { useScrollSlideIn } from "../hooks/useScrollSlideIn";

const Education = () => {
  const [titleRef, titleVisible] = useScrollFadeInTitle<HTMLHeadingElement>();
  const [educationDuoRef, educationDuoClasses] = useScrollSlideIn<HTMLDivElement>('left');
  const [activeSkill, setActiveSkill] = useState<string | null>(null);


  const studies = [
    {
      icon: '🎓',
      institution: 'UNLP, La Plata, Argentina',
      title: 'Analista en Programación Universitaria',
      period: '2023 - Presente',
    },
    {
      icon: '🛠️',
      institution: 'Escuela Técnica Nº 728, Puerto Madryn, Argentina',
      title: 'Técnico en Informática',
      period: '2014 - 2022',
    },
  ];

  return (
    <section>
      <h2 ref={titleRef} className={`fade-in-down-scroll text-3xl font-bold text-center mb-12 text-white${titleVisible ? ' is-visible' : ''}`}>Educación</h2>
      <div 
        ref={educationDuoRef}
        className={`education-duo transition-all duration-700 ${educationDuoClasses}`}
      >
        {studies.map((study, index) => (
          <div key={index} className="education-card">
            <h3 className="education-role"><span className="education-icon">{study.icon}</span> {study.title}</h3>
            <span className="education-institution">{study.institution}</span>
            <span className="education-meta">{study.period}</span>
          </div>
        ))}
      </div>
      <div className="education-skills">
        <div className="education-skills-icons">
          {autodidactaTabs.flatMap(tab => tab.icons).map(({ title, icon }) => {
            const hasDropdown = ["Redes","Hardware","Google Drive","Photoshop","Metodologías Ágiles"].includes(title);
            return (
              <span
                key={title}
                className={`education-skill-icon ${hasDropdown ? 'relative group' : ''}`}
                title={title}
                onClick={() => {
                  if (title === "Redes") setActiveSkill("Redes");
                  else if (title === "Hardware") setActiveSkill("Hardware");
                  else if (title === "Google Drive") setActiveSkill("Google Drive");
                  else if (title === "Photoshop") setActiveSkill("Photoshop");
                  else if (title === "Metodologías Ágiles") setActiveSkill("Metodologías Ágiles");
                  else setActiveSkill(null);
                }}
                style={{ cursor: hasDropdown ? "pointer" : "default" }}
              >
                {icon}
                {hasDropdown && (
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
                    <FaEllipsisV className="text-xs text-gray-700" />
                  </div>
                )}
              </span>
            );
          })}
        </div>
        {activeSkill === "Redes" && (
          <div className="education-skill-detail">
            <h4>Redes</h4>
            <ul>
              <li>Configuración de redes LAN/WAN</li>
              <li>Subnetting, direccionamiento IP</li>
              <li>WiFi, cableado estructurado</li>
              <li>Diagnóstico y resolución de problemas</li>
            </ul>
          </div>
        )}
        {activeSkill === "Hardware" && (
          <div className="education-skill-detail">
            <h4>Hardware</h4>
            <ul>
              <li>Armado y mantenimiento de PCs</li>
              <li>Diagnóstico de fallas de hardware</li>
              <li>Instalación de componentes y periféricos</li>
              <li>Limpieza y optimización física</li>
            </ul>
          </div>
        )}
        {activeSkill === "Google Drive" && (
          <div className="education-skill-detail">
            <h4>Google Drive</h4>
            <ul>
              <li>Gestión avanzada de archivos y carpetas en la nube</li>
              <li>Colaboración en tiempo real con Google Docs</li>
              <li>Automatización de backups y sincronización</li>
            </ul>
          </div>
        )}
        {activeSkill === "Photoshop" && (
          <div className="education-skill-detail">
            <h4>Adobe Photoshop</h4>
            <ul>
              <li>Retoque fotográfico profesional</li>
              <li>Diseño de banners y piezas gráficas</li>
              <li>Edición de imágenes para web y redes sociales</li>
              <li>Manejo de capas, máscaras y filtros</li>
            </ul>
          </div>
        )}
        {activeSkill === "Metodologías Ágiles" && (
          <div className="education-skill-detail">
            <h4>Metodologías Ágiles</h4>
            <ul>
              <li>Scrum y Kanban</li>
              <li>Gestión de proyectos con herramientas ágiles</li>
              <li>Trabajo colaborativo y mejora continua</li>
              <li>Adaptabilidad y enfoque en entregas iterativas</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education