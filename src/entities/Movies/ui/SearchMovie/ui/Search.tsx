import { useNavigate } from "react-router-dom";
import * as classes from "./classes.module.scss";
import useDebounce from "@/shared/helpers/hooks/useDebounce";
import { useGetSearchMovieQuery } from "@/entities/Movies/ui/SearchMovie/api/searchMovieApi";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
  const navigate = useNavigate();
  const debouncedKeywords = useDebounce(keywords, 300);
  const { data, isLoading } = useGetSearchMovieQuery(debouncedKeywords, {
    skip: debouncedKeywords.length < 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);
  };

  const handleSelect = (id: number) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <input
        type="text"
        value={keywords}
        onChange={handleChange}
        className={classes.input}
        placeholder="Search..."
      />
      {isLoading && <div>Loading...</div>}
      {data && (
        <ul className={classes.suggestions}>
          {data.films.map((movie) => (
            <li key={movie.filmId} onClick={() => handleSelect(movie.filmId)}>
              {movie.nameRu}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Search;
