"use client"
import { useEffect, useRef, useState } from "react";
import blog_data from "@/data/BlogData"
import Image from "next/image";
import Link from "next/link";
import ReactPaginate from "react-paginate";
interface User {
   idconvocatorias: number;
   con_titulo: string;
   con_foto_portada: string;
   con_descripcion: string;
   con_fecha_inicio: string;
   con_fecha_fin: string;
}
const BlogGridArea = () => {

   const [users, setUsers] = useState<User[]>([]);
   const blog = blog_data.filter(items => items.page === "inner_blog_2");
   //funcion para limpiar html
   const cleanHtml = (html: string) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return doc.body.textContent || "";
   };
   

   const itemsPerPage = 6;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = blog.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(blog.length / itemsPerPage);
   // click to request another page.
   const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % blog.length;
      setItemOffset(newOffset);
   };
   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const response = await fetch("https://serviciopagina.upea.bo/api/convocatoriasAll/18")
            const data = await response.json();
            setUsers(data);
         } catch (error) {
            console.error("EROROROROROOROOROROO:", error);
         }
      };
      fetchUsers();
   }, []);

   return (
      <div className="blog-area pd-top-120 pd-bottom-120">
         <div className="container">
            <div className="row">
               {users.map((user) => (
                  <div key={user.idconvocatorias} className="col-lg-4 col-md-6">
                     <div className="single-blog-inner style-border">
                        <div className="thumb">
                           <Image src={`https://serviciopagina.upea.bo/Convocatorias/${user.con_foto_portada}`} alt="img" width={500} height={300} unoptimized />
                        </div>
                        <div className="details">
                           <ul className="blog-meta">
                              <li><i className="fa fa-user"></i>Sección cursos</li>
                              <li><i className="fa fa-calendar-check-o"></i> {user.con_fecha_inicio}</li>
                           </ul>
                           <h5 className="title"><Link href="/blog-details">{cleanHtml(user.con_titulo)}</Link></h5>
                           <p>{cleanHtml(user.con_descripcion)}</p>
                           {/* <Link className="read-more-text" href="/blog-details">READ MORE <i className="fa fa-angle-right"></i></Link> */}
                        </div>
                     </div>
                  </div>
               ))}

               <div className="col-12 text-center">
                  {/* <nav className="td-page-navigation">
                     <ReactPaginate
                        breakLabel="..."
                        nextLabel={<i className="fa fa-angle-double-right"></i>}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        previousLabel={<i className="fa fa-angle-double-left"></i>}
                        renderOnZeroPageCount={null}
                        className="pagination"
                     />
                  </nav> */}
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogGridArea
