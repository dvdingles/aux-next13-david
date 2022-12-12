import styles from './header.module.css'
export default function Header(){

    return(
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                    <li>Nostros</li>
                </ul>
            </nav>
        </header>
    )
}