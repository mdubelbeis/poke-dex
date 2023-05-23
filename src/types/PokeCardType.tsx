export interface PokeCardType {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  moves: string[];
  types: string[];
  sprites: {}[];
}

export interface PokeType {
  name: string;
  url: string;
}
