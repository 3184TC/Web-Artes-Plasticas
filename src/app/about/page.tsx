import About from "@/components/inner-pages/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Artes Plásticas",
};
const page = () => {
   return (
      <Wrapper>
         <About />
      </Wrapper>
   )
}

export default page