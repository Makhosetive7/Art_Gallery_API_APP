import { useGetAllcharactersQuery } from "../services/bobsburgersAPI";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import ErrorPage from "./ErrorPage";
import NodataFound from "./NodataFound";
import "../styles/Allcharecters.css";
import { useState } from "react";
import Navigation from "../components/Navigation";

function Allcharacters() {
  const navigate = useNavigate()

  const [page, setPage] = useState(10)

  const {
    data: bobsburgers = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetAllcharactersQuery(page);

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
    <div className="display-container">
      <Navigation/>
      <div className="Allcharacters-container">
      {bobsburgers.map((bobsburger) => (
        <div key={bobsburger.id} className="card" onClick={() => navigate(`/characterDetail/${bobsburger.id}`)}>
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
      <button onClick={() => setPage(page - 1)} isLoading={isFetching}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)} isLoading={isFetching}>
        Next
      </button>
    </div>
  );
}

export default Allcharacters;
