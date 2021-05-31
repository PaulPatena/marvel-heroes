// https://gateway.marvel.com/v1/public/characters?ts=1622295112900&apikey=c356a2d091239df60cf718f5edb4ea07&hash=30457c189835b76a3aa5dafe2b2c084a&limit=100&offset=0
import {ICharactersData} from '../interfaces/marvel'

export const getMarvelHeroes = (): Promise<ICharactersData> => {
  return fetch(
    "https://gateway.marvel.com/v1/public/characters?ts=1622295112900&apikey=c356a2d091239df60cf718f5edb4ea07&hash=30457c189835b76a3aa5dafe2b2c084a&limit=100&offset=0"
  )
    .then((response) => response.json())
    .then((res) => res as ICharactersData);
};
