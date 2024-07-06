import { useParams } from 'react-router-dom';
import { useGetArticle } from '../../toolsHooks/hooks/useGetArticle';

const Article = () => {
  const { id } = useParams();

  if (!id) {
    return <div className="text-center py-10 text-xl text-red-600">no ID</div>;
  }

  const { data: article, error, isLoading } = useGetArticle(id);

  if (isLoading)
    return <div className="text-center py-10 text-xl">Loading...</div>;

  if (error)
    return (
      <div className="text-center py-10 text-xl text-red-600">
        An error has occurred: {error.message}
      </div>
    );

  return (
    <div className="">
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

export default Article;