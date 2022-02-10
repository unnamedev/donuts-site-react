import Link from "next/link"
import Image from "next/image"
import styles from "./Card.module.scss"

/**
 * Card
 * @param donut
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({donut}) => {
    const {title, slug, price, thumbnail} = donut.fields

    return <li className={styles.card}>
        <div className={styles.image}>
            <Link href={`/menu/${slug}`}>
                <Image src={`https:${thumbnail.fields.file.url}`}
                       width={thumbnail.fields.file.details.image.width}
                       height={thumbnail.fields.file.details.image.height}
                       alt={title}
                />
            </Link>
        </div>
        <h3 className={styles.title}>
            <Link href={`/menu/${slug}`}>{title}</Link>
        </h3>
        <p className={styles.price}>{`$${price}`}</p>
    </li>
}

export default Card
