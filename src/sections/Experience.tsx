import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useScrollFadeInTitle } from "../hooks/useScrollFadeInTitle";

const Experience = () => {
    const [titleRef, titleVisible] = useScrollFadeInTitle<HTMLHeadingElement>();
    const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});
    
    const toggleCard = (index: number) => {
        setExpandedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };
    
    const experiences = [
        {
            title: "Responsable de Formación y Desarrollo",
            company: "Eredita",
            location: "Puerto Madryn, Argentina",
            period: "Feb 2020 - Presente",
            bullets: [
                "Implementé herramientas digitales para organizar materiales y reducir tiempos administrativos.",
                "Supervisé el avance de los participantes y gestioné informes de seguimiento."
            ]
        },
        {
            title: "Atención al Cliente / Caja",
            company: "Piace Heladería/Café",
            location: "Puerto Madryn, Argentina",
            period: "Mar 2022 - Dic 2022",
            bullets: [
                "Atendí un promedio de 80 clientes diarios, gestionando cobros y resolviendo problemas con rapidez.",
                "Realicé tareas de limpieza y control de stock para mantener la operatividad del local.",
                "Colaboré con el equipo en turnos de alta demanda, mejorando la eficiencia general."
            ]
        }
    ];

    return (
        <section>
            <h2 ref={titleRef} className={`fade-in-down-scroll text-3xl font-bold text-center mb-12 text-white${titleVisible ? ' is-visible' : ''}`}>Mi experiencia</h2>
            <div className="experience-duo">
                {experiences.map((experience, index) => {
                    const isExpanded = expandedCards[index] || false;
                    return (
                        <div key={index} className="experience-card">
                            {/* Título clickeable */}
                            <button
                                onClick={() => toggleCard(index)}
                                className="w-full text-left focus:outline-none group"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="experience-role group-hover:text-blue-400 transition-colors duration-300">
                                        {experience.title}
                                    </h3>
                                    <div className="ml-4 flex-shrink-0">
                                        {isExpanded ? (
                                            <FaChevronUp className="text-blue-400 text-sm transition-transform duration-300" />
                                        ) : (
                                            <FaChevronDown className="text-gray-400 group-hover:text-blue-400 text-sm transition-all duration-300" />
                                        )}
                                    </div>
                                </div>
                            </button>
                            
                            {/* Contenido colapsable */}
                            <div 
                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                    isExpanded 
                                        ? 'max-h-96 opacity-100 mt-4' 
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="space-y-3">
                                    <span className="experience-company block">{experience.company}</span>
                                    <span className="experience-meta block">{experience.location} &middot; {experience.period}</span>
                                    <ul className="experience-bullets">
                                        {experience.bullets.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Experience;