import { AuthorModel } from "./AuthorModel";

export interface ArticleModel {
  id: number;
  title: string;
  author: AuthorModel;
  description: string;
}
