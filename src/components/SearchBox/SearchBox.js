import { useContext } from "react";
import { ArtistContext } from "../../context/ArtistContext";

import "./SearchBox.styles.scss";

function SearchBox() {
  const { artist, setArtist, setSearchData } = useContext(ArtistContext);

  const handleSetData = () => {
    fetch("https://graphbrainz.herokuapp.com/?", {
      headers: {
        accept: "application/json",
        "accept-language": "en",
        "content-type": "application/json",
      },
      referrer: "https://graphbrainz.herokuapp.com/",
      referrerPolicy: "origin",
      body: JSON.stringify({
        query: `
            query {
                search {
                    artists(query: "${artist}") {
                        nodes {
                            id
                            name
                        }
                    }
                }
            }
          `,
      }),
      method: "POST",
      mode: "cors",
      credentials: "omit",
    })
      .then((res) => res.json())
      .then((data) => setSearchData(data));
  };

  const handleSetArtist = (e) => {
    setArtist(e.target.value);
  };

  return (
    <div className="searchBox">
      <input
        className="searchBox__input"
        type="text"
        name="search_artist"
        value={artist}
        onChange={handleSetArtist}
      />
      <button onClick={handleSetData} type="submit">
        Search
      </button>
    </div>
  );
}

export default SearchBox;
