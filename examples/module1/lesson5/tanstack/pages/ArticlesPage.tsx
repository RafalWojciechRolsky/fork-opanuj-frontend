import { useQuery } from '@tanstack/react-query';
import ArticleCount from '../components/atoms/ArticlesCount';
import ArticlesLits from '../components/molecules/ArticlesLits';
import { getArticles } from '../toolsHooks/apiTools/getArticles';

const ArticlesPage = () => {
  const { error, isLoading } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
  });

  if (isLoading)
    return <div className="text-center py-10 text-xl">Loading...</div>;

  if (error)
    return (
      <div className="text-center py-10 text-xl text-red-600">
        An error has occurred: {error.message}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <ArticleCount />
        <ArticlesLits />
      </div>
    </div>
  );
};

export default ArticlesPage;
