import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props { title: string};

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin;

export const Layouts: FC<Props> = ({children, title}) => {
  
  return (
    <>
        <Head>

            <title> { title || 'Pokemon App' }</title>
            <meta name="author" content="Eric Nova" />
            <meta name="description" content={ `Pokemon ${title} info`} />
            <meta name="keywords" content={ `${title}, pokemon, pokedesk` } />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={`Information about ${ title}`} />
            <meta property="og:image" content={ `${ origin }/banner.png` } />

        </Head>

        <Navbar/>

        <main className="layout--main">

            { children }

        </main>
    </>
  )
}

