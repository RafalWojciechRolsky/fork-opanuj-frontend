import { Article } from '../../types';

export const getArticles = async (): Promise<Article[]> => {
  const response = await fetch('http://localhost:3000/api/data/articles');
  const data = await response.json();
  return data.articles;
};
