interface MenuItem {
   id: number;
   title: string;
   link: string;
   has_dropdown: boolean;
   sub_menus?: {
      link: string;
      title: string;
   }[];
}[];

const menu_data: MenuItem[] = [
   {
      id: 1,
      has_dropdown: true,
      title: "Inicio",
      link: "/",
      /* sub_menus: [
         { link: "/", title: "Inicio" },
         { link: "/home-two", title: "Home 02" },
         { link: "/home-three", title: "Home 03" },
      ], */
   },
   {
      id: 3,
      has_dropdown: true,
      title: "Carrera",
      link: "/about",
      sub_menus: [
         { link: "/about", title: "Nosotros" },
         /* { link: "/event", title: "Event" },
         { link: "/event-details", title: "Event Details" },
         { link: "/team", title: "Instructor" },
         { link: "/team-details", title: "Instructor Details" },
         { link: "/pricing", title: "Pricing" }, */
         { link: "/gallery", title: "Galeria" },
         /* { link: "/signin", title: "Sign In" },
         { link: "/signup", title: "Sign Up" }, */
      ],
   },
   {
      id: 4,
      has_dropdown: true,
      title: " Académico ",
      link: "#",
      sub_menus: [
         { link: "/blog", title: "Convocatorias" },
         { link: "/blog-grid", title: "Cursos" },
         { link: "/blog-details", title: "Ofertas Académicas", },
      ],
   },
   {
      id: 2,
      has_dropdown: true,
      title: "Enlaces",
      link: "/course-details",
      /* sub_menus: [
         { link: "/course", title: "Gaceta" },
         { link: "/course-details", title: "Enlaces" },
      ], */
   },
   {
      id: 5,
      has_dropdown: false,
      title: "Contáctos",
      link: "/contact",
   },
];
export default menu_data;
