import { createContext, useState } from "react";

export const ArtistContext = createContext({
  searchData: {},
  setSearchData: () => null,
});

export const ArtistProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({});

  const value = { searchData, setSearchData };

  return (
    <ArtistContext.Provider value={value}>{children}</ArtistContext.Provider>
  );
};
