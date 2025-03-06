import EventDetails from "@/components/inner-pages/event-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Artes Plásticas",
};
const page = () => {
   return (
      <Wrapper>
         <EventDetails />
      </Wrapper>
   )
}

export default page