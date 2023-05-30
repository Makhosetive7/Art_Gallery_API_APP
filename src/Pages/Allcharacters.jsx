import { useGetAllcharactersQuery } from "../services/bobsburgersAPI";
import Spinner from "./Spinner";
import ErrorPage from "./ErrorPage";
import NodataFound from "./NodataFound";
import "../styles/Allcharecters.css";

function Allcharacters() {
  const {
    data: bobsburgers = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetAllcharactersQuery();

  if (isLoading || isFetching) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (isError) {
    console.log(error);
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }

  if (!bobsburgers || bobsburgers.length === 0) {
    return (
      <div>
        <NodataFound />
      </div>
    );
  }

  return (
    <div className="Allcharacteres-container">
      {bobsburgers.map((bobsburger) => (
        <div key={bobsburger.id} className="card">
          <img src={bobsburger.image} alt="/" />
          <div className="details-container">
            <h1>{bobsburger.name}</h1>
            <p><span>Voice-by: </span> {bobsburger.voicedBy}</p>
            <p><span>Episode: </span> {bobsburger.firstEpisode}</p>
            <p><span>Occupation: </span> {bobsburger.occupation}</p>
          </div>
          <button>save character</button>
        </div>
      ))}
    </div>
  );
}

export default Allcharacters;
