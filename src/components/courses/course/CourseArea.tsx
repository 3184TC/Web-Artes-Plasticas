"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import UseProducts from "@/hooks/UseProducts";
import { useSelector } from "react-redux";
import { selectProducts } from "@/redux/features/productSlice";
interface User {
   gaceta_id: number;
   gaceta_titulo: string;
   gaceta_documento: string;
   gaceta_fecha: string;
}
const CourseArea = () => {
   const [users, setUsers] = useState<User[]>([]);
   const [selected, setSelected] = useState('All Category');
   const [priceSelected, setPriceSelected] = useState('All Price');
   const [levelSelected, setLevelSelected] = useState('All Level');
   const [tagSelet, setTagSelet] = useState<string | undefined>();

   const { products, setProducts } = UseProducts();
   const filteredProducts = products;

   const itemsPerPage = 6;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = filteredProducts.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

   // click to request another page.
   const handlePageClick = (event: any) => {
      const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
      setItemOffset(newOffset);
   };


   // all products 
   const allProducts = useSelector(selectProducts);

   const productCategory = useSelector(selectProducts).map(product => product.category);
   const priceCategory = useSelector(selectProducts).map(product => product.course_filter);
   const levelCategory = useSelector(selectProducts).map(product => product.level);
   const Tags = useSelector(selectProducts).map(product => product.tag);

   // allCategory
   const allCategory = ['All Category', ...new Set(productCategory)];
   const allPrice = ['All Price', ...new Set(priceCategory)];
   const allLevel = ['All Level', ...new Set(levelCategory)];
   const allTag = [...new Set(Tags)];

   //handle Category 
   const handleCategory = (category: string) => {
      setSelected(category)
      if (category === 'All Category') {
         setProducts(allProducts)
      }
      else {
         const all_course = allProducts.filter(course => course.category === category);
         setProducts(all_course)
      }
   }

   //handle price 
   const handlePrice = (price: string) => {
      setPriceSelected(price)
      if (price === 'All Price') {
         setProducts(allProducts)
      }
      else {
         const all_course = allProducts.filter(course => course.course_filter === price);
         setProducts(all_course)
      }
   }

   //handle level 
   const handleLevel = (level: string) => {
      setLevelSelected(level)
      if (level === 'All Level') {
         setProducts(allProducts)
      }
      else {
         const all_course = allProducts.filter(course => course.level === level);
         setProducts(all_course)
      }
   }

   //handle Tag 
   const handleTag = (tag: string) => {
      setTagSelet(tag);
      const all_course = allProducts.filter(course => course.tag === tag);
      setProducts(all_course)
   }

   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const response = await fetch("https://serviciopagina.upea.bo/api/gacetaunivAll/18");
            const data = await response.json();
            setUsers(data);
         } catch (error) {
            console.error("Error fetching users:", error);
         }
      };

      fetchUsers();
   }, []);

   return (
      <div className="blog-area pd-top-120 pd-bottom-120">
         <div className="container">
            <div className="row">
               <div className="col-lg-8 order-lg-12">
                  <div className="row">
                     {users.map((user) => (
                        <div key={user.gaceta_id} className="col-md-6">
                           <div className="single-course-inner">
                              <div className="thumb">
                                 <Link className="ed-btn btn-border-black b-animate-3" href={`https://serviciopagina.upea.bo/Gaceta/${user.gaceta_documento}`}>VER</Link>
                                 {/* <iframe src={`https://serviciopagina.upea.bo/Gaceta/${user.gaceta_documento}`}
                                    width="100%"
                                    height="500px"
                                    style={{ border: "none" }}>
                                 </iframe> */}
                                 {/* <Image src={`https://serviciopagina.upea.bo/Gaceta/${user.gaceta_documento}`} alt="img" width={500} height={300} layout="responsive" unoptimized /> */}
                              </div>
                              <div className="details">
                                 <div className="details-inner">
                                    <div className="emt-user">
                                       {/* <span className="u-thumb"><Image src={item.user_thumb} alt="img" /></span> */}
                                       <span className="align-self-center">{user.gaceta_fecha}</span>
                                    </div>
                                    <h6><Link href="/course-details">Gaceta: {user.gaceta_titulo}</Link></h6>
                                 </div>
                                 {/* <div className="emt-course-meta">
                                    <div className="row">
                                       <div className="col-6">
                                          <div className="rating">
                                             <i className="fa fa-star"></i> {user.gaceta_fecha}
                                             <span>({user.gaceta_titulo})</span>
                                          </div>
                                       </div>
                                       <div className="col-lg-6">
                                          <div className="price text-right">
                                             Price: <span>$.elbii 00</span>
                                          </div>
                                       </div>
                                    </div>
                                 </div> */}
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>

                  {/* <nav className="td-page-navigation">
                     <ReactPaginate
                        breakLabel="..."
                        nextLabel={<i className="fa fa-angle-double-right"></i>}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={9}
                        pageCount={pageCount}
                        previousLabel={<i className="fa fa-angle-double-left"></i>}
                        renderOnZeroPageCount={null}
                        className="pagination"
                     />
                  </nav> */}
               </div>

               <div className="col-lg-4 order-lg-1 col-12">
                  {/* <div className="td-sidebar mt-5 mt-lg-0">
                     <div className="widget widget_search_course">
                        <h4 className="widget-title">Search</h4>
                        <form onSubmit={(e) => e.preventDefault()} className="search-form single-input-inner">
                           <input type="text" placeholder="Search here" />
                           <button className="btn btn-base w-100 mt-3" type="submit"><i className="fa fa-search"></i> SEARCH</button>
                        </form>
                     </div>
                     <div className="widget widget_catagory">
                        <h4 className="widget-title">Catagory</h4>
                        <ul className="catagory-items">
                           {allCategory.map((cate_item: any, i: any) =>
                              <li key={i} onClick={() => handleCategory(cate_item)} className={cate_item === selected ? "active" : ""}>
                                 <a style={{ cursor: "pointer" }}>
                                    {cate_item} <i className="fa fa-caret-right"></i>
                                 </a>
                              </li>
                           )}
                        </ul>
                     </div>

                     <div className="widget widget_checkbox_list">
                        {allPrice.map((price: any, i: any) =>
                           <label key={i} onClick={() => handlePrice(price)} className="single-checkbox">
                              <input type="checkbox" checked={price === priceSelected} readOnly />
                              <span className="checkmark"></span>
                              {price}
                           </label>
                        )}
                     </div>

                     <div className="widget widget_checkbox_list">
                        <h4 className="widget-title">Level</h4>
                        {allLevel.map((level: any, i: any) =>
                           <label key={i} onClick={() => handleLevel(level)} className="single-checkbox">
                              <input type="checkbox" checked={level === levelSelected} readOnly />
                              <span className="checkmark"></span>
                              {level}
                           </label>
                        )}
                     </div>

                     <div className="widget widget_tags mb-0">
                        <h4 className="widget-title">Tags</h4>
                        <div className="tagcloud">
                           {allTag.map((tag: any, i: any) =>
                              <a key={i} onClick={() => handleTag(tag)} className={tag === tagSelet ? "active" : ""} style={{ cursor: "pointer" }}>
                                 {tag}
                              </a>
                           )}
                        </div>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
      </div>
   )
}

export default CourseArea
