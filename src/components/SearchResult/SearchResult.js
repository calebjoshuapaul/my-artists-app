import React, { useContext } from "react";
import { ArtistContext } from "../../context/ArtistContext";

function SearchResult() {
  const { searchData } = useContext(ArtistContext);

  if (searchData.data) {
    return (
      <div className="searchResult">
        <ol>
          {searchData?.data?.search?.artists?.nodes.map((artist) => {
            return <li key={artist.id}>{artist.name}</li>;
          })}
        </ol>
      </div>
    );
  } else {
    return (
      <div className="searchResult__empty">
        <h1>Search artist</h1>
      </div>
    );
  }
}

export default SearchResult;
