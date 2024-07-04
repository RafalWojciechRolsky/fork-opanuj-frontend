import { Article } from '../types';

export const postArticle = async (article: Article) => {
  console.log('Posting article:', article);
  // const response = await fetch('http://localhost:3000/api/data/articles', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(article),
  // });
  // const data = await response.json();
  // return data;
};
