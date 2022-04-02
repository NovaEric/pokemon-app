import pokeApi from '../api/pokeApi';
import { Pokemon } from '../interfaces';


export const getPokemons = async( nameOrId: sting ) => {

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ nameOrId }`);

    const { id, name, sprites } = data;

    return { id, name, sprites };

}