import onrunning01 from "../components/images/project/onrunning01.jpeg";
import daskino from "../components/images/project/daskino.jpeg";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";

const projectsApi = [
  {
    id: 1,
    bcgImg: onrunning01,
    projectName: "On Running",
    tecIcon1: <FaReact />,
    tecIcon2: <SiStyledcomponents />,
    tecIcon3: <IoLogoJavascript />,
    about: "Copia do e-commerce On Running, da forma que ele estava na data que escrevi os codigos. Desenvolvido com JavaScript, React e Style Components.",
    link: "https://on-running-vercel-deploy.vercel.app/",
  },
  {
    id: 2,
    bcgImg: daskino,
    projectName: "Das Kino",
    tecIcon1: <AiOutlineHtml5 />,
    tecIcon2: <DiCss3 />,
    tecIcon3: <IoLogoJavascript />,
    about: "Criação de um site de cinema, mostrando o caminho da escoha do filme até a pagina final do ingresso. Desenvolvido com Html, CSS e JavaScript",
    link: "https://gutemberg149.github.io/cinema_DasKino/src/index/index.html",
  },
  // {
  //   id: 3,
  //   bcgImg: onrunning01,
  //   projectName: "On Running",
  //   tecIcon1: <FaReact />,
  //   tecIcon2: <SiStyledcomponents />,
  //   tecIcon3: "",
  //   about: "Copia do e-commerce On Running, da forma que ele estva na data que escrevi os codigos. Desenvolvido com JaVascript, React e Style Components.",
  //   link: "",
  // },
  // {
  //   id: 4,
  //   bcgImg: onrunning01,
  //   projectName: "On Running",
  //   tecIcon1: <FaReact />,
  //   tecIcon2: <SiStyledcomponents />,
  //   tecIcon3: "",
  //   about: "Copia do e-commerce On Running, da forma que ele estva na data que escrevi os codigos. Desenvolvido com JaVascript, React e Style Components.",
  //   link: "",
  // },
  // {
  //   id: 5,
  //   bcgImg: onrunning01,
  //   projectName: "On Running",
  //   tecIcon1: <FaReact />,
  //   tecIcon2: <SiStyledcomponents />,
  //   tecIcon3: "",
  //   about: "Copia do e-commerce On Running, da forma que ele estva na data que escrevi os codigos. Desenvolvido com JaVascript, React e Style Components.",
  //   link: "",
  // },
  // {
  //   id: 6,
  //   bcgImg: onrunning01,
  //   projectName: "On Running",
  //   tecIcon1: <FaReact />,
  //   tecIcon2: <SiStyledcomponents />,
  //   tecIcon3: "",
  //   about: "Copia do e-commerce On Running, da forma que ele estva na data que escrevi os codigos. Desenvolvido com JaVascript, React e Style Components.",
  //   link: "",
  // },
];

export default projectsApi;
