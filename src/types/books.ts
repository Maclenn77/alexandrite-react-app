export interface IBook {
  id: number;
  book_id: string;
  title: string;
  authors: string[];
  publisher: string;
  description: string;
  language: string;
  country: string;
  isbn10: string;
  isbn13: string;
  ddc: string;
  lcc: string;
  categories: string[];
  pageCount: number;
  publishDate: string;
  suggestedClassifications: string[];
  dataSource: string;
}
