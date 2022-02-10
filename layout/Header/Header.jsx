import Link from "next/link"
import styles from "./Header.module.scss"
import Logo from "../../components/Logo"
import {useRouter} from "next/router"

/**
 * Header
 * @returns {JSX.Element}
 * @constructor
 */
const Header = () => {
    const router = useRouter()

    return <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
            <Logo/>
            <ul className={styles.menu}>
                <li>
                    <Link href="/">
                        <a className={router.pathname === "/" ? `${styles.current}` : ""}>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className={router.pathname === "/about" ? `${styles.current}` : ""}>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/menu">
                        <a className={router.pathname === "/menu" || router.pathname === "/menu/[slug]" ? `${styles.current}` : ""}>Menu</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default Header
