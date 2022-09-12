import { createContext, useState } from "react";

export const ArtistContext = createContext({
  artist: "",
  setArtist: () => null,
  searchData: {},
  setSearchData: () => null,
  artistData: {},
  setArtistData: () => null,
});

export const ArtistProvider = ({ children }) => {
  const [artist, setArtist] = useState("");
  const [searchData, setSearchData] = useState({});
  const [artistData, setArtistData] = useState({});

  const value = {
    artist,
    setArtist,
    searchData,
    setSearchData,
    artistData,
    setArtistData,
  };

  return (
    <ArtistContext.Provider value={value}>{children}</ArtistContext.Provider>
  );
};
