import { useQuery } from '@tanstack/react-query';
import { getArticles } from '../tools/getArticles';
import ArticleCount from '../components/ArticlesCount';
import ArticlesLits from '../components/ArticlesLits';
import Layout from '../components/Layout';

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
    <Layout>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <ArticleCount />
          <ArticlesLits />
        </div>
      </div>
    </Layout>
  );
};

export default ArticlesPage;
