import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getArticles } from '../toolsHooks/apiTools/getArticles';
import { Article as ArticleType } from '../types';

const ArticlePage = () => {
  const { id } = useParams();

  if (!id) {
    return <div className="text-center py-10 text-xl text-red-600">no ID</div>;
  }

  const {
    data: article,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['articles', id],
    queryFn: async () => {
      const articles = await getArticles();
      return (
        articles.find((article: ArticleType) => article.id === +id) || null
      );
    },
    staleTime: 10000,
  });

  if (isLoading)
    return <div className="text-center py-10 text-xl">Loading...</div>;

  if (error)
    return (
      <div className="text-center py-10 text-xl text-red-600">
        An error has occurred: {error.message}
      </div>
    );

  if (!article)
    return (
      <div className="text-center py-10 text-xl text-red-600">no article</div>
    );

  return (
    <div className="min-h-screen bg-gray-100">
      {article && (
        <div className="bg-white shadow-md rounded-lg p-4">
          <h1 className="text-2xl font-bold text-gray-800">{article.title}</h1>
          <p className="text-gray-600">{article.author}</p>
          <p className="text-gray-700">{article.content}</p>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
