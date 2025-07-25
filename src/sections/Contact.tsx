import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useScrollFadeInTitle } from "../hooks/useScrollFadeInTitle";

const contacts = [
  {
    name: "Email",
    icon: <FaEnvelope size={64} color="#bfcfff" />,
    link: "mailto:gonzamangini27@gmail.com", 
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={64} color="#bfcfff" />,
    link: "https://www.linkedin.com/in/gonzalo-mangini-1427712b4/", 
  },
  {
    name: "GitHub",
    icon: <FaGithub size={64} color="#bfcfff" />,
    link: "https://github.com/GonzaMangini", 
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={64} color="#bfcfff" />,
    link: "https://www.instagram.com/gonzamangini/?hl=es-la", 
  },
  {
    name: "Facebook",
    icon: <FaFacebook size={64} color="#bfcfff" />,
    link: "https://www.facebook.com/gonza.mangini.7", 
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={64} color="#bfcfff" />, 
    link: "https://wa.me/+5402804417161", 
  },
];

const Contact = () => {
  const [titleRef, titleVisible] = useScrollFadeInTitle<HTMLHeadingElement>();
  return (
    <section id="contact" className="contact-section">
      <h2 ref={titleRef} className={`fade-in-down-scroll text-3xl font-bold text-center mb-12 text-white${titleVisible ? ' is-visible' : ''}`}>Contacto</h2>
      <div className="contact-list">
        {contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            {contact.icon}
            <span className="contact-name">{contact.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;