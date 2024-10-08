import MovieGenreOrCountry from "@/widgets/MovieInfo/ui/DetailedInfoMovie/ui/MovieGenreOrCountry/ui/MovieGenreOrCountry";
import MovieInfoBlock from "@/widgets/MovieInfo/ui/DetailedInfoMovie/ui/MovieInfoBlock/ui/MovieInfoBlock";
import { StaffInfo } from "@/entities/staff";
import { Staff } from "@/features/staff/CastSlider/interface";
import * as classes from "./classes.module.scss";
import Calendar from "@/shared/assets/svg/calendar.svg";
import Language from "@/shared/assets/svg/language.svg";
import Star from "@/shared/assets/svg/star.svg";
import Genres from "@/shared/assets/svg/genres.svg";
import MovieRating from "@/widgets/MovieInfo/ui/DetailedInfoMovie/ui/MovieRating/ui/MovieRating";

interface Props {
  movieData: {
    year: number;
    countries: { country: string }[];
    ratingKinopoisk: number;
    genres: [{ genre: string }];
  };
  staff: Staff[];
  isLoadingStaff: boolean;
}

const DetailedInfoMovie = ({ movieData, staff, isLoadingStaff }: Props) => {
  return (
    <div className={classes.info}>
      <MovieInfoBlock icon={Calendar} title="Released Year">
        <p className={classes.year}>{movieData.year}</p>
      </MovieInfoBlock>

      <MovieInfoBlock icon={Language} title="Available Languages">
        {movieData.countries.map((language: { country: string }) => (
          <MovieGenreOrCountry
            key={language.country}
            language={language.country}
          />
        ))}
      </MovieInfoBlock>

      <MovieInfoBlock icon={Star} title="Rating">
        <MovieRating ratingKinopoisk={movieData.ratingKinopoisk} />
      </MovieInfoBlock>

      <MovieInfoBlock icon={Genres} title="Genres">
        {movieData.genres.map((genre) => (
          <MovieGenreOrCountry key={genre.genre} genre={genre.genre} />
        ))}
      </MovieInfoBlock>

      {!isLoadingStaff && staff.length > 1 && (
        <>
          <StaffInfo
            posterUrl={staff[0].posterUrl}
            nameRu={staff[0].nameRu}
            profession={staff[0].profession}
          />
          <StaffInfo
            posterUrl={staff[1].posterUrl}
            nameRu={staff[1].nameRu}
            profession={staff[1].profession}
          />
        </>
      )}
    </div>
  );
};

export default DetailedInfoMovie;
