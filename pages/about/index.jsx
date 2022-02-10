import Head from "next/head"
import styles from "../../styles/About.module.scss"

/**
 * About
 * @returns {JSX.Element}
 * @constructor
 */
const About = () =>
    <>
        <Head>
            <title>About | Donuts</title>
        </Head>
        <section className={styles.about}>
            <div className="container">
                <h1 className={styles.title}>
                    <span>🍩</span>
                    Handcrafted donuts & curated gift boxes delivered to your home or event
                </h1>
                <p className={styles.text}>
                    Doughnuts may very well be Los Angeles's quintessential start to the day, thanks to the Southeast Asian
                    immigrants who brought these sweetly glazed treats to nearly every strip mall across the Southland. The
                    city’s dynamic doughnut scene is not only comprised of these foundational mom-and-pop doughnut shops,
                    with their signature pink boxes, but unique flavors from operators like Colorado Donuts and DK Donuts on
                    the Westside. Given Angelenos’ tremendous appetites for all that’s deep-fried and delightful, there’s
                    room for fritters of all stripes. Here now are the 15 most delectable doughnut shops in Los Angeles.
                </p>
            </div>
        </section>
    </>

export default About
