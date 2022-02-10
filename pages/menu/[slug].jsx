import {createClient} from "contentful"
import Image from "next/image"
import styles from "../../styles/Detail.module.scss"
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Head from "next/head"

/**
 * Client
 * @type {ContentfulClientApi}
 */
const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.APP_TOKEN
})

/**
 * getStaticPaths
 * @returns {Promise<{paths: {params: {slug: *}}[], fallback: boolean}>}
 */
export const getStaticPaths = async () => {
    const response = await client.getEntries({content_type: "menu"})
    const paths = response.items.map(item => ({params: {slug: item.fields.slug}}))

    return {
        paths, fallback: false
    }
}

/**
 * getStaticProps
 * @param params
 * @returns {Promise<{props: {menu: Entry<unknown>}}>}
 */
export const getStaticProps = async ({params}) => {
    const {items} = await client.getEntries({
        content_type: "menu", "fields.slug": params.slug
    })

    return {
        props: {menu: items[0]}
    }
}

/**
 * Detail
 * @param menu
 * @returns {JSX.Element}
 * @constructor
 */
const Detail = ({menu}) => {
    const {title, featured_Images, description, ingredients, price} = menu.fields

    return <>
        <Head>
            <title>{title} | Donuts</title>
        </Head>
        <section className={styles.detail}>
            <div className="container">
                <h3 className={styles.title}>{title}</h3>

                <div className={styles.top}>

                    <div className={styles.image}>
                        <Image src={`https:${featured_Images.fields.file.url}`}
                               width={featured_Images.fields.file.details.image.width}
                               height={featured_Images.fields.file.details.image.height}
                               alt={title}
                        />
                    </div>

                    <div className={styles.content}>
                        <h3 className={styles.title_2}>Description</h3>
                        <div>
                            {documentToReactComponents(description)}
                        </div>
                        <h3 className={styles.title_2}>Ingredients</h3>
                        <ul className={styles.list}>
                            {ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
                        </ul>
                        <h3 className={styles.title_2}>Price</h3>
                        <p className={styles.price}>{`$${price}`}</p>
                    </div>

                </div>
            </div>
        </section>
    </>
}

export default Detail
