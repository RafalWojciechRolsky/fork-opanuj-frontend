import { useQuery } from '@tanstack/react-query';
import { getArticles } from '../../toolsHooks/apiTools/getArticles';

const ArticleCount = () => {
  const { data } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
  });

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">Article Count</h2>
      <p>Total number of articles: {data?.length || 0}</p>
    </div>
  );
};

export default ArticleCount;
