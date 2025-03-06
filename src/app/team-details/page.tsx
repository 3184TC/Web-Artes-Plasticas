import TeamDetails from "@/components/inner-pages/teams/team-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Artes Plásticas",
};
const page = () => {
   return (
      <Wrapper>
         <TeamDetails />
      </Wrapper>
   )
}

export default page