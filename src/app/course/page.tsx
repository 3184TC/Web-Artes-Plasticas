import Course from "@/components/courses/course";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Artes Plásticas",
};
const page = () => {
   return (
      <Wrapper>
         <Course />
      </Wrapper>
   )
}

export default page