"use client"
import { useEffect, useState } from "react";
import testi_data from "@/data/TestimonialData"
import Image from "next/image"
import Slider from "react-slick"
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
const setting = {
   infinite: true,
   speed: 1500,
   slidesToShow: 3,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: '0',
   dots: false,
   arrows: false,
   autoplay: false,
   autoplaySpeed: 1500,
   responsive: [
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 1
         }
      }
   ]
}

const CommonTestimonial = () => {


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
   const elementos = [
      { id: 1, titulo: "MISIÓN", texto: institucion?.institucion_mision },
      { id: 2, titulo: "VISIÓN", texto: institucion?.institucion_vision },
      { id: 3, titulo: "OBJETIVOS", texto: institucion?.institucion_objetivos }
   ];
   return (


      <Slider {...setting} className="testimonial-slider-2">
         {elementos.map((item) => (
            <div key={item.id} className="item">
               <div className="single-testimonial-inner">
                  <span className="testimonial-quote"><i className="fa fa-quote-right"></i></span>
                  <p>
                     <div className="media-body align-self-center">
                        <h6>{item.titulo}</h6>
                        {/* <p>Carrera de Artes Plásticas</p> */}
                     </div>
                     {cleanHtml(item.texto)}</p>
                  <div className="media testimonial-author">
                     <div className="media-left">
                        {/* <Image src={item.author_img} alt="img" /> */}
                     </div>

                  </div>
               </div>
            </div>
         ))}
      </Slider>

   )
}

export default CommonTestimonial
