import { useGetAllcharactersQuery } from "../services/bobsburgersAPI";
import Spinner from "./Spinner";
import ErrorPage from "./ErrorPage";
import NodataFound from "./NodataFound";

function Allcharacters() {
 const { data: bobsburgers = [] , isLoading, isFetching, isError, error } = useGetAllcharactersQuery();

 if (isLoading || isFetching) {
 return <div><Spinner/></div>;
 }

 if (isError) {
 console.log(error);
 return <div><ErrorPage/></div>;
 }

 if (!bobsburgers || bobsburgers.length === 0) {
 return <div><NodataFound/></div>;
 }

 return (
 <div>
 {bobsburgers.map((bobsburger) => (
 <div key={bobsburger.id}>
 <h2>{bobsburger.name}</h2>
 </div>
 ))}
 </div>
 );
}

export default Allcharacters;
