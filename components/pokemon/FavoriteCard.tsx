import { Card, Grid } from "@nextui-org/react"
import { useRouter } from "next/router";
import { FC } from "react"

interface Props { pokeid: number };

export const FavoriteCard: FC<Props> = ({pokeid}) => {

    const router = useRouter();

    const onPokemonClick = () => {

        router.push(`/pokemon/${ pokeid }`);
    }

    return (

        <Grid xs={6} sm={3} md={2} xl={1} key={pokeid} onClick={ onPokemonClick } >
            <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeid}.svg`}
                    width={'100'}
                    height={140}
                />
            </Card>
        </Grid>
    )
}
