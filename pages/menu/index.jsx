import Head from "next/head"
import MenuList from "../../components/Menu/Menu"
import {createClient} from "contentful"

/**
 * getStaticProps
 * @returns {Promise<{props: {menu: Array<Entry<unknown>>}}>}
 */
export const getStaticProps = async () => {
    const client = createClient({
        space: process.env.SPACE_ID,
        accessToken: process.env.APP_TOKEN
    })

    const response = await client.getEntries({content_type: "menu"})
    return {
        props: {
            menu: response.items
        }
    }
}

/**
 * Menu
 * @returns {JSX.Element}
 * @constructor
 */
const Menu = ({menu}) =>
    <>
        <Head>
            <title>Menu | Donuts</title>
        </Head>

        <MenuList donuts={menu}/>
    </>

export default Menu
