import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ArtistContext } from "../../context/ArtistContext";

function SearchItem({ artist }) {
  const { setArtistData } = useContext(ArtistContext);
  const navigate = useNavigate();
  const { name } = artist;

  const handleArtistClick = async () => {
    await fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${name}`)
      .then((response) => response.json())
      .then((data) => setArtistData(data));

    navigate(`/${name}`);
  };

  return <li onClick={handleArtistClick}>{name}</li>;
}

export default SearchItem;
