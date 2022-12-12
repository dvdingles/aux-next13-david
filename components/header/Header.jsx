import Link from 'next/link'
import styles from './header.module.css'


const menus = [{
    label: 'Inicio',
    route: '/'
},{
    label: 'Productos',
    route: '/productos'
},{
    label: 'Contacto',
    route: '/contacto'
},{
    label: 'Nostros',
    route: '/nosotros'
}]


export default function Header(){





    return(
        <header className={styles.header}>
            <nav>
                <ul>
                    {menus.map(( {label, route }) => (
                        <li key={route}>
                            <Link href={route}>
                                {label}
                            </Link>
                        </ li>
                    ))}
                    {/* <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                    <li>Nostros</li> */}
                </ul>
            </nav>
        </header>
    )
}