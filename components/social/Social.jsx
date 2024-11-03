import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Social = () => {
  const socialContent = [
    {
      id: 5,
      link: "https://github.com/edhenprimasandy005",
      icon: <FaGithub />,
      iconClass: "text-black",
    },
    {
      id: 1,
      link: "https://www.facebook.com/edenprimasandy",
      icon: <FaFacebookF />,
      iconClass: "text-[#1773EA]",
    },
    {
      id: 2,
      link: "https://x.com/edenprimasandy",
      icon: <FaXTwitter />,
      iconClass: "text-black",
    },
    {
      id: 3,
      link: "https://instagram.com/eden_primasandy",
      icon: <FaInstagram />,
      iconClass: "text-[#e14a84]",
    },
    {
      id: 4,
      link: "https://www.linkedin.com/in/edhenprimasandy",
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
