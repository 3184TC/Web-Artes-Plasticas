"use client";
/* import team_data from '@/data/TeamData' */
import Image from 'next/image'
import Link from 'next/link'
/* import React from 'react' */


import React, { useEffect, useState } from 'react';/* 
import { getUsersData } from '@/data/TeamData'; */

interface User {
  foto_autoridad: string;
  nombre_autoridad: string;
  cargo_autoridad: string;
  celular_autoridad: string;
}

const Team = ({ style }: any) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://serviciopagina.upea.bo/api/AutoridadAll/18");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={`team-area pd-top-120 pd-bottom-90 ${style ? "" : "bg-light-green"}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title text-center">
              <h6 className={`sub-title ${style ? "double-line" : "style-btn"}`}>ARTES PLASTICAS</h6>
              <h2 className="title">AUTORIDADES</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {users.map((user, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="single-team-inner">
                <div className="thumb">
                  <Image
                    src={`https://serviciopagina.upea.bo/InstitucionUpea/Autoridad/${user.foto_autoridad}`}
                    alt={user.nombre_autoridad}
                    width={300}
                    height={300}
                    unoptimized // Desactiva la optimización de Next.js
                  />
                  <div className="social-wrap">
                    <div className="social-wrap-inner">
                      <Link className="social-share" href="#"><i className="fa fa-share-alt"></i></Link>
                      <ul>
                        <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                        {/* <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                        <li><Link href="#"><i className="fa fa-linkedin"></i></Link></li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <h4><Link href="#">{user.nombre_autoridad}</Link></h4>
                  <span>{user.cargo_autoridad}</span>
                  {/* <p>Celular: {user.celular_autoridad}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

/* const Team = ({ style }: any) => {
   return (
      <div className={`team-area pd-top-120 pd-bottom-90 ${style ? "" : "bg-light-green"}`}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7">
                  <div className="section-title text-center">
                     <h6 className={`sub-title ${style ? "double-line" : "style-btn"}`}>ARTES PLASTICAS</h6>
                     <h2 className="title">AUTORIDADES</h2>
                  </div>
               </div>
            </div>
            <div className="row justify-content-center">
               {team_data.filter((items) => items.page === "home_1").slice(0, 3).map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="single-team-inner">
                        <div className="thumb">
                           <Image src={item.thumb} alt="img" />
                           <div className="social-wrap">
                              <div className="social-wrap-inner">
                                 <Link className="social-share" href="#"><i className="fa fa-share-alt"></i></Link>
                                 <ul>
                                    <li><Link href="#"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-pinterest"></i></Link></li>
                                    <li><Link href="#"><i className="fa fa-linkedin"></i></Link></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="details">
                           <h4><Link href="#">{item.title}</Link></h4>
                           <span>{item.designation}</span>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Team */
