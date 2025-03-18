import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import icon_1 from "@/assets/img/icon/12.png";
import icon_2 from "@/assets/img/icon/13.png";
import icon_3 from "@/assets/img/icon/14.png";
import icon_4 from "@/assets/img/icon/15.png";

interface DataType {
   id: number;
   icon: StaticImageData
   title: string;
   desc: string;
}[];

const work_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Producción artística en pintura, escultura, grabado y nuevas tecnologías",
      desc: "El profesional egresado de la Carrera de Artes en lo académico tendrá la capacidad de percepción, comprensión, composición.",
   },
   {
      id: 2,
      icon: icon_2,
      title: "Gestión y curaduría de exposiciones y eventos culturales.",
      desc: "Los artistas sean buenos ciudadanos, intelectualmente maduros, con identidad cultural y socialmente responsables.",
   },
   {
      id: 3,
      icon: icon_3,
      title: "Restauración y conservación de bienes culturales.",
      desc: "Sean profesionales plásticos, humanistas y con pensamiento holístico – transdisciplinario, con una especialidad básica.",
   },
   {
      id: 4,
      icon: icon_4,
      title: "Docencia en artes visuales.",
      desc: "Con la facultad de desempeñarse en la gestión cultural independiente, con la gobernación departamental, gobiernos locales, comunidad o con instituciones culturales.",
   },
]

const WorkArea = () => {
   return (
      <div className="work-area pd-top-110">
         <div className="container">
            <div className="section-title">
               <div className="row">
                  <div className="col-lg-6 align-self-center">
                     <h6 className="sub-title right-line">ÁMBITO PROFESIONAL</h6>
                     <h2 className="title">¿DÓNDE PUEDES TRABAJAR?</h2>
                  </div>
                  <div className="col-lg-6 align-self-center">
                     <p className="content mt-lg-0">Los egresados de la carrera de Artes Plásticas podrán desempeñarse en diversas áreas como:</p>
                  </div>
               </div>
            </div>
            <div className="row">
               {work_data.map((item) => (
                  <div key={item.id} className="col-lg-6 col-md-6">
                     <div className="single-intro-inner style-icon-bg bg-gray text-center">
                        <div className="thumb">
                           <Image src={item.icon} alt="img" />
                           <div className="intro-count">{item.id}</div>
                        </div>
                        <div className="details">
                           <h5>{item.title}</h5>
                           {/* <p>{item.desc}</p> */}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default WorkArea
