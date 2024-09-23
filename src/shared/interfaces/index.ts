export interface Films {
  currentData: Film;
  data: Film;
  endpointName: string;
  fulfilledTimeStamp: number;
  isError: boolean;
  isFetching: boolean;
  isSuccess: boolean;
  isUninitialized: boolean;
  originalArgs: Args;
  refetch: () => void;
  requestId: string;
  startedTimestamp: number;
  status: string;
}

export interface Film {
  items: FilmData[];
  total: number;
  totalPages: number;
}

export interface FilmData {
  countries: string[];
  genres: string[];
  imdbId?: string;
  kinopoiskId: number;
  nameEn?: string;
  nameOriginal?: string;
  nameRu?: string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingImdb: number;
  ratingKinopoisk: number;
  type: string;
  year: number;
}

export interface Args {
  genre: number;
  page: number;
}
