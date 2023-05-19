import { useGetArtworksQuery } from "../services/artInstituteApi";
import Spinner from "./Spinner";
import ErrorPage from "./ErrorPage"
import NodataFound from "./NodataFound"

function Artworks() {
  const {
    data = { artworks: [] },
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetArtworksQuery();

 console.log(data)

  if (isLoading || isFetching) {
    return <div><Spinner/></div>;
  }

  if (isError) {
    console.log({ error });
    return <div><ErrorPage/></div>;
  }
  if (!data || !data.artworks) {
    return <div><NodataFound/></div>
  }
  return (
    <div>
      {data.data.artworks.map((artwork) => (
        <div key={artwork.artist_id}>
          <h2>{artwork.artist_title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Artworks;
