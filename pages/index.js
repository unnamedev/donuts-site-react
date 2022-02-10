import Link from "next/link"
import styles from "../styles/Home.module.scss"
import {createClient} from "contentful"
import Head from "next/head"
import MenuList from "../components/Menu/Menu"

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
 * Home
 * @param menu
 * @returns {JSX.Element}
 * @constructor
 */
const Home = ({menu}) =>
    <>
        <Head>
            <title>Home | Donuts</title>
        </Head>
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Donuts to your home desk</h1>
                <p className={styles.lead}>Handcrafted donuts, cookies & curated gift boxes</p>
                <Link href="/menu">
                    <a className={styles.button}>All products</a>
                </Link>
            </div>
        </section>
        <MenuList donuts={menu}/>
    </>

export default Home
