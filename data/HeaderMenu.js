import { AiOutlineHome } from "react-icons/ai";
import { FaBlogger, FaRegUser } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";

module.exports = [
  {
    id: "01",
    name: "Home",
    routePath: "/home-regular/home",
    icon: <AiOutlineHome />,
  },
  {
    id: "02",
    name: "About",
    routePath: "/home-regular/about",
    icon: <FaRegUser />,
  },
  {
    id: "06",
    name: "Resume",
    routePath: "/home-regular/resume",
    icon: <CgNotes />,
  },
  {
    id: "03",
    name: "Works",
    routePath: "/home-regular/works",
    icon: <FiCodesandbox />,
  },
  {
    id: "04",
    name: "Blogs",
    routePath: "/home-regular/blogs",
    icon: <FaBlogger />,
  },
  {
    id: "05",
    name: "Contact",
    routePath: "/home-regular/contact",
    icon: <RiContactsBookLine />,
  },
];
