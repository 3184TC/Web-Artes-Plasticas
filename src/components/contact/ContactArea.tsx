"use client";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/img/icon/17.png"
import icon_2 from "@/assets/img/icon/18.png"
import icon_3 from "@/assets/img/icon/16.png"

interface Institucion {
   institucion_id: number;
   institucion_celular1: string;
   institucion_celular2: string;
   institucion_telefono1: string;
   institucion_telefono2: string;
   institucion_correo1: string;
   institucion_correo2: string
   institucion_facebook: string;
   institucion_twitter: string;
   institucion_direccion: string;
   institucion_api_google_map: string;
}

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
   desc: string;
}[];

const contact_list: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Contáctos",
      desc: "000 2324 39493 /+591 00000000 /+591 0000000 ",
   },
   {
      id: 2,
      icon: icon_2,
      title: "Horarios de Atención",
      desc: "Lunes a Viernes: 08:00 a 12:00 / 14:00 a 18:00",
   },
   {
      id: 3,
      icon: icon_3,
      title: "Ubiación",
      desc: "Zona Villa Esperanza. / La carrera de artes plasticas se encuentra ubicado en el emblematico lado derecho",
   },
]
const ContactArea = () => {

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

   return (
      <div className="contact-list pd-top-120 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               {institucion && (
                  <div key={institucion.institucion_id} className="col-lg-7">
                     <div className="contact-list-inner">
                        <div className="media">
                           <div className="media-left">
                           <i className="fa fa-map-marker"></i>
                           </div>
                           <div className="media-body align-self-center">
                              <h5>Dirreción</h5>
                              <p><i className="fa fa-map-marker"></i> {institucion.institucion_direccion}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
         <div className="container">
            <div className="row justify-content-center">
               {institucion && (
                  <div key={institucion.institucion_id} className="col-lg-6">
                     <div className="contact-list-inner">
                        <div className="media">
                           <div className="media-left">
                           <i className="fa fa-phone"></i> 
                           </div>
                           <div className="media-body align-self-center">
                              <h5>Información de Contáctos</h5>
                              <p><i className="fa fa-phone"></i><strong> Primer contácto: </strong>{institucion.institucion_celular1}</p>
                              <p><i className="fa fa-phone"></i><strong> Segundo contácto: </strong>{institucion.institucion_celular2}</p>
                              <p><i className="fa fa-envelope"></i><strong> Correo electronico: </strong>{institucion.institucion_correo1}</p>

                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
         <div className="container">
            <div className="row justify-content-center">
               {institucion && (
                  <div key={institucion.institucion_id} className="col-lg-5">
                     <div className="contact-list-inner">
                        <div className="media">
                           <div className="media-left">
                              {/* <Image src={item.icon} alt="img" /> */}
                           </div>
                           <div className="media-body align-self-center">
                              <h5>Redes Sociales</h5>
                              <p> <a
                                 href={institucion.institucion_facebook}
                                 target="_blank">
                                 <i className="fa fa-facebook"></i> Artes Plásticas
                              </a></p>
                              <p> <a
                                 href={institucion.institucion_twitter}
                                 target="_blank">
                                 <i className="fa fa-twitter"></i> Twitter
                              </a></p>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}

export default ContactArea
