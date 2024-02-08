export interface ICharacters {
  eye_color: string;
  gender: string;
  hair_color: string;
  skin_color: string;
  height: string;
  birth_year: string;
  mass: string;
  name: string;
}

export interface IFetchCharacters {
  index: number;
  count: number;
  next: string | null;
  prev: string | null;
  results: ICharacters[];
}
