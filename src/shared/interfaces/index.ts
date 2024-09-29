export interface Film {
  items: FilmData[];
  total?: number;
  totalPages?: number;
}

export interface FilmData {
  kinopoiskId: number;
  imdbId?: string;
  nameRu: string;
  nameEn?: string | null;
  nameOriginal: string;
  countries: Country[];
  genres: Genre[];
  ratingKinopoisk: number;
  ratingImdb: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl?: string;
  description?: string;
  ratingAgeLimits: string;
}

export interface Genre {
  genre: string;
}

export interface Country {
  country: string;
}

export interface Args {
  genre: number;
  page: number;
}

export type Review = {
  author: string;
  description: string;
  type: string;
  kinopoiskId?: number;
};

export interface MovieForSlice {
  id: number;
  title: string;
  coverUrl: string;
}
