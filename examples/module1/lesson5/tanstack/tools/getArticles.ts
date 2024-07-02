export const getArticles = async () => {
  const response = await fetch('http://localhost:3000/api/data/articles');
  const data = await response.json();
  return data.articles;
};