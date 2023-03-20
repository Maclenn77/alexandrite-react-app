export interface IBookInstance {
  id: number;
  item_id: number;
  title: string;
  authors: string[];
  categories: string[];
  date: string;
  publisher: string;
  country: string;
  page_count: number;
  publish_date: string;
  description: string;
  isbn10: string;
  isbn13: string;
  data_source: string;
  ddc: string;
}
