import { useQuery } from '@tanstack/react-query';
import { Article } from '../types';
import { getArticles } from '../tools/getArticles';
import { Link } from 'react-router-dom';

const ArticlesLits = () => {
  const { data } = useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
    staleTime: 10000,
  });

  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Articles
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((article: Article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">By {article.author}</p>
              <p className="text-gray-700 line-clamp-3">{article.content}</p>
            </div>
            <div className="px-6 py-4 bg-gray-100">
              <Link to={`/${article.id}`}>
                <button className="text-blue-500 hover:text-blue-700 font-semibold">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArticlesLits;
