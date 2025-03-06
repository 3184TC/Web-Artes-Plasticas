"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import eventThumb from "@/assets/img/other/events.png";
import Link from "next/link";

interface User {
   evento_id: number;
   evento_titulo: string;
   evento_imagen: string;
   evento_descripcion: string;
   evento_fecha: string;
   evento_hora: string;
   evento_lugar: string;
 }
interface DataType {
   id: number;
   date: JSX.Element;
   title: string;
}[];

const event_data: DataType[] = [
   {
      id: 1,
      date: (<><span>JAN</span> 20</>),
      title: "Evento 1",
   },
   {
      id: 2,
      date: (<><span>FEB</span> 26</>),
      title: "Maecenas interdum lorem eleifend",
   },
   {
      id: 3,
      date: (<><span>JAN</span> 28</>),
      title: "Nunc scelerisque tincidunt elit.",
   },
];

const Event = () => {
   //funcion para limpiar html
   const cleanHtml = (html: string) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return doc.body.textContent || "";
   };

   const [users, setUsers] = useState<User[]>([]);

   useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await fetch("https://serviciopagina.upea.bo/api/eventoAll/18");
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
  
      fetchUsers();
    }, []);

   return (
      <div className="events-area pd-top-110 pd-bottom-120">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7 col-md-11">
                  <div className="section-title text-center">
                     <h6 className="sub-title double-line">EVENTOS</h6>
                     <h2 className="title">Eventos Institucionales</h2>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <ul className="single-blog-list-wrap style-white" style={{ backgroundColor: `var(--heading-color)` }}>
                     {users.map((user) => (
                        <li key={user.evento_id}>
                           <div className="media single-blog-list-inner style-white">
                              <div className="media-left date">
                                 {user.evento_id}
                              </div>
                              <div className="media-body details">
                                 <ul className="blog-meta">
                                    <li><i className="fa fa-user"></i> {user.evento_fecha}</li>
                                    <li><i className="fa fa-folder-open-o"></i> {user.evento_lugar}</li>
                                 </ul>
                                 <h5><Link href="#">{cleanHtml(user.evento_titulo)}</Link></h5>
                                 <Image src={`https://serviciopagina.upea.bo/Eventos/${user.evento_imagen}`} alt="img" width={500} height={300} unoptimized />
                              </div>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
               {/* <div className="col-lg-4 align-self-center">
                  <div className="event-thumb">
                     <Image src={eventThumb} alt="img" />
                  </div>
               </div> */}
            </div>
         </div>
      </div>
   )
}

export default Event
