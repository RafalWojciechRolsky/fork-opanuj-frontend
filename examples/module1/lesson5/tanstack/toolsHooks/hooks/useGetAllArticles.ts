import { useQuery } from '@tanstack/react-query';
import { Article } from '../../../../../module2/lesson3/zod-validation/articles/models/Article';

export const useGetAllArticles = (queryFn: () => Promise<Article[]>) => {
  return useQuery({
    queryKey: ['articles'],
    queryFn,
    staleTime: 10000,
  });
};
