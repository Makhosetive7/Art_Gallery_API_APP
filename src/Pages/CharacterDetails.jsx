import React from "react";
import { useParams } from "react-router-dom";
import { useGetCharacterDetailsQuery } from "../services/bobsburgersAPI";

const CharacterDetails = () => {
    const { id } = useParams();
  const {
    data: bobBurger= [],
    isLoading,
    isFetching,
    error,
  } = useGetCharacterDetailsQuery(id);

  if (isLoading || isFetching) {
    return <div>hello</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  return (
  <div>
    hello {id}
    <h1>{bobBurger.name}</h1>
  </div>
  )};

export default CharacterDetails;
