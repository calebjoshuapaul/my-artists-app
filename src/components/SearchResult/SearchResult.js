import React, { useContext } from "react";
import { ArtistContext } from "../../context/ArtistContext";
import SearchItem from "../SearchItem/SearchItem";

import "./SearchResult.styles.scss";

function SearchResult() {
  const { searchData } = useContext(ArtistContext);

  if (searchData.data) {
    return (
      <div className="searchResult">
        <ol>
          {searchData?.data?.search?.artists?.nodes.map((artist) => {
            return <SearchItem key={artist.id} artist={artist} />;
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
