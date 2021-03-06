import pokeApi from '../api/pokeApi';
import { Pokemon } from '../interfaces';


export const getPokemons = async (nameOrId: string) => {


    try {

        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

        const { id, name, sprites } = data;

        return { id, name, sprites };


    } catch (error) {
        return null;
    }

}