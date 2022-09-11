import { useContext, useEffect, useState } from "react";
import { ArtistContext } from "../../context/ArtistContext";

function SearchBox() {
  const { setSearchData } = useContext(ArtistContext);
  const [artist, setArtist] = useState("");

  // recordings {
  // nodes {
  //     theAudioDB {
  //     trackID
  //     albumID
  //     artistID
  //     description(lang: "en")
  //     thumbnail(size: FULL)
  //     score
  //     musicVideo {
  //         url
  //         screenshots(size: FULL)
  //         likeCount
  //         dislikeCount
  //     }
  //     }
  // }
  // }

  useEffect(() => {
    (async () => {
      artist &&
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
                            country
                            gender
                            type
                            theAudioDB {
                            artistID
                            biography(lang: "en")
                            banner(size: FULL)
                            thumbnail(size: FULL)
                            genre
                            mood
                            style
                            }
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
    })();
    if (!artist) {
      setSearchData({});
    }
  }, [artist, setSearchData]);

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
      {/* <button type="submit">Search</button> */}
    </div>
  );
}

export default SearchBox;
