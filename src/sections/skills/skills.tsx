import { FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaGit, FaDatabase, FaGoogleDrive, FaReact, FaWindows, FaWordpress } from 'react-icons/fa';
import { SiTypescript, SiGo, SiTailwindcss, SiMicrosoftword, SiMicrosoftexcel, SiAdobephotoshop } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: 'Lenguajes de programación',
      items: [
        { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
        { name: 'Go', icon: <SiGo className="text-cyan-600" /> },
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'SQL', icon: <FaDatabase className="text-indigo-600" /> },
      ],
    },
    {
      category: 'Herramientas y plataformas',
      items: [
        { name: 'Git', icon: <FaGit className="text-red-600" /> },
        { name: 'Google Drive', icon: <FaGoogleDrive className="text-green-500" /> },
        { name: 'Excel', icon: <SiMicrosoftexcel className="text-green-700" /> },
        { name: 'Word', icon: <SiMicrosoftword className="text-blue-700" /> },
        { name: 'Photoshop', icon: <SiAdobephotoshop className="text-blue-400" /> },
      ],
    },
    {
      category: 'Conocimientos complementarios',
      items: [
        { name: 'Redes', icon: <FaWindows className="text-gray-500" /> },
        { name: 'Hardware', icon: <FaReact className="text-sky-500" /> },
        { name: 'Metodologías ágiles', icon: <FaWordpress className="text-purple-600" /> },
      ],
    },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">Aptitudes</h2>
      <div className="space-y-10">
        {skills.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold text-indigo-500 mb-4">{group.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded shadow hover:shadow-md transition"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <span className="text-gray-800 dark:text-gray-200">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;