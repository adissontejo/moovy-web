import type { Movie } from '~/types/api';
import { api } from './api';

export const getSavedMovies = () => {
  return api.get<Movie[]>('/movies/saved');
};

export const searchMovies = (name: string) => {
  return api.get<Array<{ movie: Movie; saved: boolean }>>(
    `/movies?name=${name}`,
  );
};

export const saveMovie = (id: string) => {
  return api.post<Movie>(`/movies/${id}/save`);
};

export const unsaveMovie = (id: string) => {
  return api.delete<Movie>(`/movies/${id}/unsave`);
};
