import { useNavigate } from "react-router-dom";
import * as classes from "./classes.module.scss";
import useDebounce from "@/shared/helpers/hooks/useDebounce";
import { useGetSearchMovieQuery } from "@/entities/Movies/ui/SearchMovie/api/searchMovieApi";
import { FilmData } from "@/shared/interfaces";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  const navigate = useNavigate();
  const debouncedKeywords = useDebounce(keywords, 1000);
  const { data, isLoading } = useGetSearchMovieQuery(debouncedKeywords || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);
  };

  const handleSelect = (id: number) => {
    navigate(`/movie/${id}`);
  };

  if (isLoading) {
    return <div style={{ position: "absolute" }}>Loading...</div>;
  }

  return (
    <>
      <input
        type="text"
        value={keywords}
        onChange={handleChange}
        className={classes.input}
        placeholder="Search..."
      />

      {
        <ul className={classes.suggestions}>
          {data.items.map((movie: FilmData) => (
            <li
              className={classes.list}
              key={movie.kinopoiskId}
              onClick={() => handleSelect(movie.kinopoiskId)}>
              {movie.nameRu}
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default Search;
