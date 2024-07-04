import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputForm from '../components/atoms/InputForm';
import { postArticle } from '../tools/postArticle';
import { Article } from '../types';

const initState: Article = {
  id: '',
  author: '',
  title: '',
  content: '',
};

const ArticleFormPage = () => {
  const [formData, setFormData] = useState<Article>(initState);

  const { mutate } = useMutation({
    mutationFn: postArticle,
    onSuccess: () => {
      console.log('Form submission successful');
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      id: uuidv4(),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData);
    setFormData(initState);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Article Form
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <InputForm
            value={formData.author}
            handleChange={handleChange}
            type="text"
            id="author"
          />
        </div>
        <div>
          <InputForm
            value={formData.title}
            handleChange={handleChange}
            type="text"
            id="title"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ArticleFormPage;
