import { Button, Link, Spacer, Text, useTheme } from "@nextui-org/react";
import NextLink from 'next/link';
import Image from "next/image";



export const Navbar = () => {

  const { theme } = useTheme();

  return (
    <div
      className="ui--navbar"
      style={{ backgroundColor: theme?.colors.gray900.value }}
    >

      <Image

        // src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
        alt='Pokemon logo'
        width={70}
        height={70}
      />
      <NextLink href='/' passHref>
        <Link>

          <Text color="white" h2>P</Text>
          <Text color="white" h3>okémon</Text>

        </Link>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href='/favorites' passHref>
        <Link>
          <Button color='gradient'> Favorites </Button>

        </Link>
      </NextLink>

    </div>
  )
}
