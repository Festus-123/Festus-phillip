import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { IconType } from "react-icons";

export type Contacts = {
  name: string;
  link: string;
  icon: IconType;
};

const contacts: Contacts[] = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/festus-phillip-12aa742a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: FaLinkedin,
  },
  {
    name: "X",
    link: "https://x.com/festus28328",
    icon: SiX,
  },
  {
    name: "GitHub",
    link: "https://github.com/Festus-123",
    icon: FaGithub,
  },
  // {
  //     name: "Telegram",
  //     link: "t.me/Othodo_x",
  //     icon: FaTelegram
  // },
  {
    name: "WhatsApp",
    link: "https://wa.me/08140809527",
    icon: FaWhatsapp,
  },
];

export default contacts;
