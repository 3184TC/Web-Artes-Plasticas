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
                     <div className="single-blog-inner style-border"
                     style={{
                        height: "400px", // Altura fija para evitar que se adapte a la imagen
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        overflow: "hidden",
                     }}>
                        <div className="thumb"
                        style={{
                           width: "100%",
                           height: "300px", // Mantiene una altura fija para la imagen
                           display: "flex",
                           justifyContent: "center",
                           alignItems: "center",
                           overflow: "hidden",
                        }}>
                           <Image src={`https://serviciopagina.upea.bo/Convocatorias/${user.con_foto_portada}`} alt="img" width={500} height={300} unoptimized 
                           style={{ 
                              width: "100%", 
                              height: "100%", 
                              objectFit: "cover" // Evita distorsión de la imagen
                           }} />
                        </div>
                        <div className="details"
                        style={{ 
                           flexGrow: 1, 
                           display: "flex", 
                           flexDirection: "column", 
                           justifyContent: "space-between" 
                        }}>
                           <ul className="blog-meta">
                              <li><i className="fa fa-user"></i>Sección cursos</li>
                              <li><i className="fa fa-calendar-check-o"></i> {user.con_fecha_inicio}</li>
                           </ul>
                           <h5 className="title"><Link href="/blog-details"><h5 dangerouslySetInnerHTML={{__html: user.con_titulo}}/></Link></h5>
                           {/* <p dangerouslySetInnerHTML={{__html: user.con_descripcion}}/> */}
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
