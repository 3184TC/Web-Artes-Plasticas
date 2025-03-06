import Singup from "@/components/inner-pages/signup";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Artes Plásticas",
};
const page = () => {
   return (
      <Wrapper>
         <Singup />
      </Wrapper>
   )
}

export default page