"use client";
import { useEffect, useState } from "react";
import Link from "next/link"
interface Institucion {
   institucion_facebook: string;
   institucion_direccion: string;
   institucion_api_google_map: string;
}
const HeaderTopOne = () => {
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
      <div className="navbar-top" style={{ backgroundColor: '#999999' }}>
         <div className="container">
            <div className="row">
               <div className="col-md-7 text-md-left text-center">
                  <ul>
                     <li><p><i className="fa fa-map-marker"></i>Dirrección: {institucion?.institucion_direccion}</p></li>
                     {/* <li><p><i className="fa fa-envelope-o"></i>  artesplasticas@gmail.com</p></li> */}
                  </ul>
               </div>
               <div className="col-md-3">
                  <ul className="topbar-right text-md-right text-center">
                     <li className="social-area">
                        <Link href={institucion.institucion_facebook} target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                        {/* <Link href="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link> */}
                        {/* <Link href="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link> */}
                        {/* <Link href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link> */}
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HeaderTopOne;
