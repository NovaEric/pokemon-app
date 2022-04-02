import NextPage from 'next';
import { Layouts } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { useEffect, useState } from 'react';
import { localFavorites } from '../../utils';
import { FavoritesPokemons } from '../../components/pokemon';




const FavoritePage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
      setFavoritePokemons( localFavorites.pokemons() );
    }, [])
    
    return (
        <Layouts title='Favorites-Pokemons'>
            {
                favoritePokemons.length === 0
                ? ( <NoFavorites/> )
                : (
                   <FavoritesPokemons favoritePokemons={ favoritePokemons } />
                )
                
            }
        </Layouts>
    )
}

export default FavoritePage;
