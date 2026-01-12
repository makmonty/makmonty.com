import { useCmsContent } from './useCmsContent';

export const useGames = async() => {
  return useCmsContent('games');
};
