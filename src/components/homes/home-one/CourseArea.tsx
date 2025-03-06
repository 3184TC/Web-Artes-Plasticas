"use client"
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
/* import course_data from "@/data/CourseData"; */

const tab_title: string[] = ["PUBLICACIONES"/* , "EVENTOS", "SERVICIOS", "OTROS" */,];

interface User {
   publicaciones_id: number;
   publicaciones_titulo: string;
   publicaciones_imagen: string;
   publicaciones_descripcion: string;
   publicaciones_fecha: string;
   publicaciones_autor: string;
}
const CourseArea = () => {

   const [activeTab, setActiveTab] = useState(0);
   const [users, setUsers] = useState<User[]>([]);


   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const response = await fetch("https://serviciopagina.upea.bo/api/publicacionesAll/18");
            const data = await response.json();
            setUsers(data);
         } catch (error) {
            console.error("Error fetching users:", error);
         }
      };

      fetchUsers();
   }, []);
   // Handle tab click event
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };
   //funcion para limpiar html
   const cleanHtml = (html: string) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return doc.body.textContent || "";
   };
   return (
      <div className="course-area pd-top-100 pd-bottom-90">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-8 col-lg-10 col-md-11">
                  <div className="section-title style-white text-center">
                     <h2 className="title">ARTES PLÁSTICAS</h2>
                  </div>
               </div>
            </div>
            <div className="edmt-nav-tab style-white text-center">
               <ul className="nav nav-tabs" id="myTab" role="tablist">
                  {tab_title.map((tab, index) => (
                     <li key={index} className="nav-item">
                        <a onClick={() => handleTabClick(index)} style={{ cursor: "pointer" }} className={activeTab === index ? 'nav-link active' : ' nav-link'} >{tab}</a>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="tab-content" id="myTabContent">
               <div className={`tab-pane fade show active`}>
                  <div className="row">
                     {users.slice(0, 6).map((user) => (
                        <div key={user.publicaciones_id} className="col-lg-4 col-md-6">
                           <div className="single-course-inner">
                              <div className="thumb">
                                 <Image src={`https://serviciopagina.upea.bo/Publicaciones/${user.publicaciones_imagen}`} alt={user.publicaciones_titulo} width={300} height={200} unoptimized />
                              </div>
                              <div className="details">
                                 <div className="details-inner">
                                    <div className="emt-user">
                                       <span className="u-thumb">
                                          <Image src={`https://serviciopagina.upea.bo/Publicaciones/${user.publicaciones_imagen}`} alt="user" width={30} height={30} unoptimized />
                                       </span>
                                       <span className="align-self-center">{user.publicaciones_titulo}</span>
                                    </div>
                                    <h6>
                                       <Link href="/course-details">{cleanHtml(user.publicaciones_descripcion)}</Link>
                                    </h6>
                                 </div>
                                 {/* <div className="emt-course-meta">
                                    <div className="row">
                                       <div className="col-6">
                                          <div className="rating">
                                             <i className="fa fa-star"></i> FECHA:{user.publicaciones_fecha}
                                          </div>
                                       </div>
                                       <div className="col-6">
                                          <div className="price text-right">
                                             <span>DIRE¿¿¿¿{user.publicaciones_autor}</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div> */}
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CourseArea
