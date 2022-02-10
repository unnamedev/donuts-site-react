import MenuCard from "../Card/Card"
import styles from "./Menu.module.scss"

/**
 * Menu
 * @param donuts
 * @returns {JSX.Element}
 * @constructor
 */
const Menu = ({donuts}) =>
    <section className={styles.products}>
        <div className="container">
            <h2 className={styles.title}>Our Donuts</h2>
            <ul className={styles.list}>
                {donuts.map(donut => <MenuCard key={donut.sys.id} donut={donut}/>)}
            </ul>
        </div>
    </section>

export default Menu
