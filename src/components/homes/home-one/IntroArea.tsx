import intro_data from "@/data/IntroData"
import Image from "next/image"
import Link from "next/link"


const IntroArea = () => {
   return (
      <div className="intro-area intro-area--top">
         <div className="container">
            <div className="intro-area-inner intro-home-1 bg-black">
               <div className="row no-gutters">
                  <div className="col-lg-4 text-lg-left text-center">
                     <div className="intro-title">
                        <h3>CARRERA ACREDITADA </h3>
                        <p>Artes Plásticas reconocida por la CUB</p>
                        <ul>
                           <li><i className="fa fa-check"></i> Calidad Académica </li>
                           <li><i className="fa fa-check"></i> Malla Actualizada</li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-8 align-self-center">
                     <ul className="row no-gutters">
                        {intro_data.filter((items) => items.page === "home_1").map((item) => (
                           <li key={item.id} className="col-md-4">
                              <div className="single-intro-inner style-white text-center">
                                 <div className="thumb">
                                    <Image src={item.icon} alt="img" />
                                 </div>
                                 <div className="details">
                                    <h5>
                                    <Link className="b-animate-3" href="/about">{item.title}</Link>
                                    </h5>
                                 </div>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default IntroArea
