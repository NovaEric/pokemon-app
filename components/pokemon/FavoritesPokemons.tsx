import { Grid } from "@nextui-org/react"
import { FC } from "react"
import { FavoriteCard } from "./"

interface Props { favoritePokemons: number[]; };

export const FavoritesPokemons: FC<Props> = ( {favoritePokemons} ) => {

  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {
        favoritePokemons.map( id => (
            <FavoriteCard   key={id} pokeid={id} />
        ))
    }
</Grid.Container>
  )
}


