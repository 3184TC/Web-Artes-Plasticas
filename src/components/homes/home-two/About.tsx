"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
interface Institucion {
   institucion_id: number;
   institucion_nombre: string;
   institucion_mision: string;
   institucion_objetivos: string;
   institucion_vision: string;
   institucion_logo: string;
   institucion_sobre_ins: string;
   institucion_historia: string;
}
interface DataType {
   list: string[];
}[];

const list_data: DataType[] = [
   { list: ["Presencial", "Infraestructura", "Calidad Académica"] },
   { list: ["Presentaciones", "Exposión de Artes", "Titulación efectiva"] },
];

const About = ({ style }: any) => {

   const [institucion, setInstitucion] = useState<Institucion | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchInstitucion = async () => {
         try {
            const response = await fetch("https://serviciopagina.upea.bo/api/InstitucionUPEA/18");
            const data = await response.json();
            setInstitucion(data.Descripcion); // Guardamos solo la parte "Descripcion"
         } catch (error) {
            console.error("Error al obtener datos:", error);
         } finally {
            setLoading(false);
         }
      };

      fetchInstitucion();
   }, []);

   if (loading) return <p>Cargando...</p>;
   //funcion para limpiar html
   const cleanHtml = (html: string) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return doc.body.textContent || "";
   };
   return (
      <div className={`about-area pd-top-120 ${style ? "pd-bottom-120" : ""}`}>
         <div className="container">
            <div className="about-area-inner">
               <div className="row">
                  <div className="col-lg-6 col-md-10">
                     <div className="about-thumb-wrap after-shape" style={{ backgroundImage: `url(/assets/img/about/artes-1.jpg)` }}>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     {institucion && (
                        <div key={institucion.institucion_id} className="about-inner-wrap">
                           <div className="section-title mb-0">
                              <h6 className="sub-title right-line">HISTORIA</h6>
                              <h2 className="title">Carrera de Artes Plásticas.</h2>
                              {/* Renderizar historia con HTML seguro */}
                              {/* <p className="content" dangerouslySetInnerHTML={{ __html: institucion.institucion_historia }} /> */}
                              <p className="content">{cleanHtml(institucion.institucion_historia)}</p>
                              <div className="row">
                                 {list_data.map((item, index) => (
                                    <div key={index} className="col-sm-6">
                                       <ul className="single-list-wrap">
                                          {item.list.map((list, i) => (
                                             <li key={i} className="single-list-inner style-check-box">
                                                <i className="fa fa-check"></i> {list}
                                             </li>
                                          ))}
                                       </ul>
                                    </div>
                                 ))}
                              </div>
                              {/* <Link className="ed-btn btn-border-black" href="/about">Read More</Link> */}
                           </div>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default About
