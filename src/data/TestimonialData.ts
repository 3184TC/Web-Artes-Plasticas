import { StaticImageData } from "next/image";

import authorImg_1 from "@/assets/img/logo-artes-foother.png";
import authorImg_2 from "@/assets/img/logo-artes-foother.png";

interface DataType {
   id: number;
   page: string;
   desc: string;
   author_img: StaticImageData;
   author_name: string;
   designation: string;
}[];

const testi_data: DataType[] = [
   {
      id: 1,
      page: "home_1",
      desc: "Los egresados de la carrera de Artes Plásticas de la Universidad Pública de El Alto desarrollan un profundo sentido estético y creativo, dominando la manipulación de elementos visuales para expresar ideas innovadoras. A través del dominio de técnicas académicas y la exploración de prácticas artísticas, son capaces de crear nuevos lenguajes plásticos que reflejan su identidad y visión en el ámbito artístico contemporáneo",
      author_img: authorImg_1,
      author_name: "MALLA CURRICULAR",
      designation: "ARTES PLÁSTICAS",
   },
   {
      id: 2,
      page: "home_1",
      desc: "Carrera de Artes Plásticas con 4 menciones: Cerámica, Pintura, Escultura y/o Grabado Artístico.",
      author_img: authorImg_2,
      author_name: "PLAN DE ESTUDIOS",
      designation: "ARTES PLÁSTICAS",
   },

   // home_2

   /* {
      id: 1,
      page: "home_2",
      desc: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
      author_img: authorImg_1,
      author_name: "VISIÓN",
      designation: "Tincidunt",
   },
   {
      id: 2,
      page: "home_2",
      desc: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
      author_img: authorImg_2,
      author_name: "OBJETIVOS",
      designation: "Nulla nec",
   },
   {
      id: 3,
      page: "home_2",
      desc: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
      author_img: authorImg_1,
      author_name: "OBJETIVOS",
      designation: "Tincidunt",
   },
   {
      id: 4,
      page: "home_2",
      desc: "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
      author_img: authorImg_2,
      author_name: "MISIÓN",
      designation: "Nulla nec",
   }, */

   // home_3

   {
      id: 1,
      page: "home_3",
      desc: "Lorem ipsum dolor sit amet, elitr, sed diam volu sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      author_img: authorImg_1,
      author_name: "Eugene Freeman",
      designation: "Tincidunt",
   },
   {
      id: 2,
      page: "home_3",
      desc: "Lorem ipsum dolor sit amet, elitr, sed diam volu sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      author_img: authorImg_2,
      author_name: "Freeman Ugene",
      designation: "Tincidunt",
   },
   {
      id: 3,
      page: "home_3",
      desc: "Lorem ipsum dolor sit amet, elitr, sed diam volu sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      author_img: authorImg_1,
      author_name: "Freeman Ugene",
      designation: "Tincidunt",
   },
   {
      id: 4,
      page: "home_3",
      desc: "Lorem ipsum dolor sit amet, elitr, sed diam volu sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
      author_img: authorImg_2,
      author_name: "Freeman Ugene",
      designation: "Tincidunt",
   },
];

export default testi_data;