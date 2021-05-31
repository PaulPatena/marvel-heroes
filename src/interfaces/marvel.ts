export interface IHeroData {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface ICharactersData {
  code: number;
  data: {
    results: Array<IHeroData>;
  };
}