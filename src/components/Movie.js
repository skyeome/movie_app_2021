import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

const MovieItem = styled.div`
  width:25%;
  padding:20px;
`;
const InnerWrap = styled.div`
  box-shadow: 5px 38px 90px rgb(102 102 102 / 10%);
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
`;
const ImgWrap = styled.div`

  img {
    width:100%;
  }
`;
const TextWrap = styled.div`
  padding:18px 12px;
  border-radius: 12px;
`;
const Title = styled.h2`
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:18px;
  font-weight: 600;
  margin-bottom: 1em;
`;
const GenreList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
  li{
    padding:5px 3px;
    font-size:12px;
    border-radius: 5px;
    background-color: #efefef;
    color: #666;
    margin-right: 3px;
    margin-bottom: 3px;
    line-height:1.5;
  }
`;
const SummaryTxt = styled.p`
  line-height:1.5;
  color:#222;
`;

function Movie({id,coverImg,title,summary,genres}){
  return (
    <MovieItem>
      <InnerWrap>
        <ImgWrap><Link to={`/movie/${id}`}><img src={coverImg} alt={title} /></Link></ImgWrap>
        <TextWrap>
          <Title><Link to={`/movie/${id}`}>{title}</Link></Title>
          <GenreList>
            {genres.map(g=><li key={g}>{g}</li>)}
          </GenreList>
          <SummaryTxt>{summary.length > 90 ? (summary.substring(0,90) + "...") : summary}</SummaryTxt>
        </TextWrap>
      </InnerWrap>
    </MovieItem>
  );
}
Movie.propTypes = {
  id:PropTypes.number.isRequired,
  coverImg:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;