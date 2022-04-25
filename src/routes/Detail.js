import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const TopVisual = styled.div`
  background: url(${props => props.bgImg});
`;

function Detail(){
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const getMovieById = async()=>{
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovieData(json.data.movie);
    setLoading(false);
  };
  useEffect(()=>{
    getMovieById();
    console.log(movieData);
  },[id]);
  return (loading ? <div>loading...</div> : 
  (<div>
    <TopVisual bgImg={movieData.background_image}>
      <img src={movieData.medium_cover_image} alt={movieData.title}/>
    </TopVisual>
    <h2>{movieData.title} | <span>{movieData.year}</span></h2>
    <ul>
      {movieData.genres.map((genre)=><li key={genre}>{genre}</li>)}
    </ul>
    <p>{movieData.description_full}</p>
  </div>));
}
export default Detail;