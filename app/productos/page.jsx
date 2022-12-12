import Image from "next/image"
import styles from './productos.module.css'

const ProductosPage = () => {

    return(
        <>
            
            <div className={styles.productos}>

                <Image fill className={styles.nave} alt="david" priority src={'/nave.jpg'} /* width={555} height={555} alt='david' */  />
                <div className={styles.parrafo}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam omnis provident natus, cum non repellendus veniam quaerat ratione saepe voluptatibus! Error eius id enim totam deserunt. Eos, odit quo!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum sed repellat ducimus ipsam ea, iste commodi, minima reprehenderit distinctio nihil porro. Quidem magni laborum similique laboriosam saepe! Quos, magni distinctio!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quidem fuga quam vel unde consectetur totam labore nihil, voluptate animi reprehenderit. Doloremque soluta neque officiis quae illo numquam quidem et?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, impedit cumque vero quisquam, consequatur maxime officiis omnis dolor est, debitis doloribus cupiditate. Maiores incidunt delectus neque, tenetur reprehenderit assumenda vitae?
                    </p>
                </div>
            </div>
        </>
    )

}

export default ProductosPage