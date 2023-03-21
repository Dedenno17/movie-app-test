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
}
