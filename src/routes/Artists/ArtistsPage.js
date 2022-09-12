import { useContext } from "react";
import { ArtistContext } from "../../context/ArtistContext";
import "./ArtistsPage.styles.scss";

function ArtistsPage() {
  const { artistData } = useContext(ArtistContext);

  if (!artistData?.artists) {
    return (
      <div>
        <h2>No info about the artist was found</h2>
      </div>
    );
  } else {
    const [data] = artistData?.artists;
    return (
      <div className="artistsPage">
        <img src={data.strArtistBanner} alt="artist banner" />
        <h2>{data.strArtist}</h2>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Country</th>
              <th>Genre</th>
              <th>No of Members</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.intFormedYear}</td>
              <td>{data.strCountry}</td>
              <td>{data.strGenre}</td>
              <td>{data.intMembers}</td>
            </tr>
          </tbody>
        </table>
        <p>{data.strBiographyEN}</p>
      </div>
    );
  }
}

export default ArtistsPage;
