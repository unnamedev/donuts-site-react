import Image from "next/image"
import Link from "next/link"

/**
 * Logo
 * @returns {JSX.Element}
 * @constructor
 */
const Logo = () =>
    <Link href="/">
        <a><Image src="/logo.svg" alt="Donuts" width={60} height={60}/></a>
    </Link>

export default Logo
