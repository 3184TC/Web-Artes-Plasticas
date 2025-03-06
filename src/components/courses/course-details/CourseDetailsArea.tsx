"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image"
import CourseDetailsSidebar from "./CourseDetailsSidebar";
/* import course_data from "@/data/CourseData"; */
import Link from "next/link";
import CourseDetailsNavTab from "./CourseDetailsNavTab";

import author from "@/assets/img/author/1.png";
import thumb from "@/assets/img/course/9.png";
interface User {
   idconvocatorias: number;
   con_titulo: string;
   con_foto_portada: string;
   con_descripcion: string;
   con_fecha_inicio: string;
   con_fecha_fin: string;
}
const CourseDetailsArea = () => {

   const [users, setUsers] = useState<User[]>([]);
   useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch("https://serviciopagina.upea.bo/api/convocatoriasAll/18");
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
  
      fetchUsers();
    }, []);


   return (
      <div className="course-single-area pd-top-120 pd-bottom-90">
         <div className="container">
            <div className="row">
               <div className="col-lg-8">
                  <div className="course-course-detaila-inner">
                     {/* <div className="details-inner">
                        <div className="emt-user">
                           <span className="u-thumb"><Image src={author} alt="img" /></span>
                           <span className="align-self-center">Nancy Reyes</span>
                        </div>
                        <h3 className="title">Fox Nymphs Grab Quick-jived Waltz. Brick Quiz Whangs</h3>
                     </div>
                     <div className="thumb">
                        <Image src={thumb} alt="img" />
                     </div> */}
                     <CourseDetailsNavTab />
                  </div>
               </div>
               <CourseDetailsSidebar />
            </div>

            <div className="row justify-content-center pd-top-100">
               <h2>OTROS COMUNICADOS</h2>
               {users.slice(0, 3).map((user) => (
                  <div key={user.idconvocatorias} className="col-lg-4 col-md-6">
                     <div className="single-course-inner">
                        <div className="thumb">
                           <Image src={`https://serviciopagina.upea.bo/Convocatorias/${user.con_foto_portada}`} alt="img" width={500} height={300} layout="responsive" unoptimized />
                        </div>
                        <div className="details">
                           <div className="details-inner">
                              <div className="emt-user">
                                 <span className="u-thumb"><Image src={`https://serviciopagina.upea.bo/Convocatorias/${user.con_foto_portada}`} alt="img" width={500} height={300} layout="responsive" unoptimized/></span>
                                 <span className="align-self-center">{user.con_fecha_inicio}</span>
                              </div>
                              <h6><Link href="/course-details">{user.con_titulo}</Link></h6>
                           </div>
                           <div className="emt-course-meta">
                              <div className="row">
                                 <div className="col-6">
                                    <div className="rating">
                                       <i className="fa fa-star"></i> {user.con_fecha_fin}
                                       <span>({user.con_fecha_inicio})</span>
                                    </div>
                                 </div> 
                                 {/* <div className="col-6">
                                    <div className="price text-right">
                                       Price: <span>${item.price}.00</span>
                                    </div>
                                 </div> */}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default CourseDetailsArea
