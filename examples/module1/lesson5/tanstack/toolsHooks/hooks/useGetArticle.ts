import { useQuery } from '@tanstack/react-query';
import { Article } from '../../types';
import { getArticles } from '../apiTools/getArticles';

export const useGetArticle = (id: string) => {
  return useQuery({
    queryKey: ['articles', id],
    queryFn: async () => {
      const articles = await getArticles();
      return articles.find(
        (article: Article) => article.id.toString() === id.toString()
      );
    },
    staleTime: 10000,
  });
};
