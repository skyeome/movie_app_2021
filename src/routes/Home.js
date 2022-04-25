import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin:0 auto;
  padding:0 20px;
`;

const MovieWrap = styled.div`
  display:flex;
  flex-wrap: wrap;
`;

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(()=>{
    getMovie();
  },[]);
  return (
    <Container>
      {loading ? (<h1>Loading...</h1>) : (<MovieWrap>
        {movies.map(movie => 
        <Movie 
          key={movie.id} 
          id={movie.id} 
          coverImg={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary} 
          genres={movie.genres} 
        />
        )}
      </MovieWrap>)}
    </Container>
  );
}
export default Home;