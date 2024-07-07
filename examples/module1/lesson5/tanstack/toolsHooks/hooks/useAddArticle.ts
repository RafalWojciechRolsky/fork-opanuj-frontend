import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Article } from '../../types';
import { postArticle } from '../apiTools/postArticle';
import { queryClient } from '../queryClient';

export const useAddArticle = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: postArticle,
    onMutate: async (data) => {
      console.log('Form submission in progress', data);
      await queryClient.cancelQueries({ queryKey: ['articles'] });
      queryClient.setQueryData(['articles'], (oldData: Article[]) => [
        ...oldData,
        data,
      ]);
    },
    onSuccess: () => {
      // await queryClient.invalidateQueries({ queryKey: ['articles'] });
      console.log('Form submission successful');
      navigate('/');
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log('Form submission failed', error);
        return;
      } else {
        // await queryClient.invalidateQueries({ queryKey: ['articles'] });
        console.log('Form submission settled');
      }
    },
    onError: (_, error) => {
      console.log('Form submission failed', error);
    },
  });
};
