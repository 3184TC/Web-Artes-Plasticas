"use client"
import { useEffect, useRef, useState } from "react";
import blog_data from "@/data/BlogData"
import Image from "next/image";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import BlogSidebar from "../common-blog/BlogSidebar";
interface User {
   idconvocatorias: number;
   con_titulo: string;
   con_foto_portada: string;
   con_descripcion: string;
   con_fecha_inicio: string;
   con_fecha_fin: string;
}
const BlogArea = () => {

   const [users, setUsers] = useState<User[]>([]);
   const blog = blog_data.filter(items => items.page === "inner_blog");

   const itemsPerPage = 3;
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
            const response = await fetch("https://serviciopagina.upea.bo/api/convocatoriasAll/18");
            const data = await response.json();
            setUsers(data);
         } catch (error) {
            console.error("Error fetching users:", error);
         }
      };

      fetchUsers();
   }, []);
   //funcion para limpiar html
   const cleanHtml = (html: string) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      return doc.body.textContent || "";
   };
   return (
      <div className="blog-area pd-top-120 pd-bottom-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-15">
                  {users.map((user) => (
                     <div key={user.idconvocatorias} className="single-blog-inner style-border">
                        <div className="thumb">
                           <Image src={`https://serviciopagina.upea.bo/Convocatorias/${user.con_foto_portada}`} alt="img" width={500} height={300} layout="responsive" unoptimized />
                        </div>
                        <div className="details">
                           <ul className="blog-meta">
                              {/* <li><i className="fa fa-user"></i> BY ADMIN elvi</li> */}
                              <li><i className="fa fa-calendar-check-o"></i> {user.con_fecha_inicio} / {user.con_fecha_fin}</li>
                           </ul>
                           <h3 className="title"><Link href="#">{user.con_titulo}</Link></h3>
                           <p>{cleanHtml(user.con_descripcion)}</p>
                           {/* <Link className="read-more-text" href="/blog-details">convocatorias <i className="fa fa-angle-right"></i></Link> */}
                        </div>
                     </div>
                  ))}

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

               <div className="col-lg-4">
                  <BlogSidebar />
               </div>
            </div>
         </div>
      </div>
   )
}

export default BlogArea
