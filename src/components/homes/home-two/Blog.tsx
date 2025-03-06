"use client"
import { useEffect, useRef, useState } from "react";
/* import blog_data from "@/data/BlogData" */
import Image from "next/image"
import Link from "next/link"


interface User {
  publicaciones_id: number;
  publicaciones_titulo: string;
  publicaciones_imagen: string;
  publicaciones_descripcion: string;
  publicaciones_fecha: string;
  publicaciones_autor: string;
}
const Blog = ({ style }: any) => {
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

  return (
    <div className={`blog-area pd-bottom-90 ${style ? "pd-top-120" : "pd-top-110"}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title text-center">
              <h6 className={`sub-title ${style ? "style-btn" : "double-line"}`}>Latest News</h6>
              <h2 className="title">Our Insights & Articles</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {users.slice(0, 6).map((user) => (
            < div key={user.publicaciones_id} className="col-lg-4 col-md-6" >
              <div className="single-blog-inner">
                <div className="thumb">
                  <Image src={`https://serviciopagina.upea.bo/Publicaciones/${user.publicaciones_imagen}`} alt="img" width={500} height={300} layout="responsive" unoptimized/>
                  <span className="date">{user.publicaciones_descripcion}</span>
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li><i className="fa fa-user"></i> BY ADMIN elba blog 2025</li>
                    <li><i className="fa fa-folder-open-o"></i> Air transport</li>
                  </ul>
                  <h5><Link href="/blog-details">{user.publicaciones_titulo}</Link></h5>
                  <Link className="read-more-text" href="/blog-details">READ MORE <i className="fa fa-angle-right"></i></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}

export default Blog
