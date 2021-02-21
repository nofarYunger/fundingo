import { Category } from './category';

export interface Month {
  categories: Category[];
  month: number;
  year: number;
}
