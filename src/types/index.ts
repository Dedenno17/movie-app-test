// types of content data
export interface Content {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

// types of content data
export interface ContentData {
  Search: Content[];
  Response: string;
  totalResults: number;
}

// types of rating single content
export interface Rating {
  Source: string;
  Value: string;
}

// types of single content
export interface SingleContent {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
