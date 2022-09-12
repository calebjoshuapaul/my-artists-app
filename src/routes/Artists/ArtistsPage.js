import { useContext } from "react";
import { ArtistContext } from "../../context/ArtistContext";
import "./ArtistsPage.styles.scss";

function ArtistsPage() {
  const { artistData } = useContext(ArtistContext);
  const [data] = artistData.artists;
  console.log(data);

  if (artistData) {
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
  } else return <h1>Home</h1>;
}

export default ArtistsPage;
