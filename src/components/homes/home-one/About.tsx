"use client";
import { useEffect, useState } from "react";
import Image from "next/image"

import bannerThumb from "@/assets/img/icon/4.png"
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
const About = () => {

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
      <div className="about-area pd-top-140">
         <div className="container">
            <div className="about-area-inner">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="about-thumb-wrap left-icon" style={{ backgroundImage: `url(/assets/img/banner/2.jpg)` }}>
                        <div className="about-icon"><Image src={bannerThumb} alt="img" /></div>
                        <div className="bottom-content">
                           La Universidad Pública de El Alto formando profesionales para el desarrollo de Bolivia.
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     {institucion && (
                        <div key={institucion.institucion_id} className="about-inner-wrap pl-xl-4 pt-5 pt-lg-0 mt-5 mt-lg-0">
                           <div className="section-title mb-0">
                              <h6 className="sub-title right-line">SOBRE LA CARRERA</h6>
                              <h2 className="title">Artes Plásticas</h2>
                              <p className="content">{cleanHtml(institucion.institucion_sobre_ins)}</p>
                              {/* <ul className="single-list-wrap">
                                 <li className="single-list-inner style-check-box-grid">
                                    <div className="media">
                                       <div className="media-left">
                                          <i className="fa fa-check"></i>
                                       </div>
                                       <div className="media-body">
                                          <h5>Ligula molestie</h5>
                                          <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore</p>
                                       </div>
                                    </div>
                                 </li>
                                 <li className="single-list-inner style-check-box-grid">
                                    <div className="media">
                                       <div className="media-left">
                                          <i className="fa fa-check"></i>
                                       </div>
                                       <div className="media-body">
                                          <h5>Ligula molestie</h5>
                                          <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore</p>
                                       </div>
                                    </div>
                                 </li>
                              </ul> */}
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
