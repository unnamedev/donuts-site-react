import styles from "./Footer.module.scss"
import Link from "next/link"
import Logo from "../../components/Logo"

/**
 * Footer
 * @returns {JSX.Element}
 * @constructor
 */
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.grid} container`}>
                <div className={styles.column}>
                    <Logo/>
                    <p>Fast delivery, which is active all over the world, serves with many transportation vehicles</p>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.title}>Company</h3>
                    <ul>
                        <li><Link href="/about"><a>About us</a></Link></li>
                        <li><Link href="/"><a>Blog</a></Link></li>
                        <li><Link href="/menu"><a>All products</a></Link></li>
                        <li><Link href="/"><a>Location Map</a></Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.title}>Service</h3>
                    <ul>
                        <li><Link href="/"><a>Order tracking</a></Link></li>
                        <li><Link href="/"><a>Wish list</a></Link></li>
                        <li><Link href="/"><a>My account</a></Link></li>
                        <li><Link href="/"><a>Teams & Conditions</a></Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h3 className={styles.title}>Get in Touch</h3>
                    <p>Subscribe to our weekly Newsletter and receive updates via email</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
