import SingIn from "@/components/inner-pages/signin";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Artes Plásticas",
};
const page = () => {
   return (
      <Wrapper>
         <SingIn />
      </Wrapper>
   )
}

export default page