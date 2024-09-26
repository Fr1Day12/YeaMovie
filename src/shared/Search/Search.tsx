import * as classes from "./classes.module.scss";

interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}
const Search = ({ keywords, setKeywords }: Props) => {
  return (
    <input
      type="text"
      value={keywords}
      onChange={(e) => setKeywords(e.target.value)}
      className={classes.input}
      placeholder="Search..."
    />
  );
};

export default Search;
