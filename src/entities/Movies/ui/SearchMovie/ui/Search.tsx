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
  const debouncedKeywords = useDebounce(keywords, 1000);
  const { data, isLoading } = useGetSearchMovieQuery(debouncedKeywords || "");

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

      {!isLoading && (
        <ul className={classes.suggestions}>
          {data?.items.map((movie) => (
            <li
              className={classes.list}
              key={movie.kinopoiskId}
              onClick={() => handleSelect(movie.kinopoiskId)}>
              {movie.nameRu}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Search;
