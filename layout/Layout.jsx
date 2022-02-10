import Head from "next/head"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

/**
 * Layout
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const Layout = ({children}) => (
    <>
        <Head>
            <link rel="shortcut icon" href="/favicon.svg" type="image/svg"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap"
                  rel="stylesheet"/>
        </Head>

        <div className="page">
            <Header/>
            {children}
            <Footer/>
        </div>
    </>
)

export default Layout
