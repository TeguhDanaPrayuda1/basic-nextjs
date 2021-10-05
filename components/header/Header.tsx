import Link from 'next/link'
import Styles from './Header.module.css'

export default function Header() {
    return (
        <header className={Styles.container}>
            <ul className={Styles.list}>
                <li className={Styles.item}><Link href="/"><a className={Styles.hover}>Home</a></Link></li>
                <li className={Styles.item}><Link href="/blog"><a className={Styles.hover}>Blog</a></Link></li>
                <li className={Styles.item}><Link href="/users"><a className={Styles.hover}>Users</a></Link></li>
                <li className={Styles.item}><Link href="/about"><a className={Styles.hover}>About</a></Link></li>
            </ul>
        </header>
    )
}
