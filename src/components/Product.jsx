import './Product.css'

//import dependencies
import PropTypes from 'prop-types'
const images = import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,svg}', { eager: true });

export default function Product({ title, description, price, img }) {

    // Obtener la imagen directamente
    const imageModule = images[`/src/assets/images/${img}`];
    const imageSrc = imageModule?.default;

    // Formatear el precio
    const formattedPrice = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(price);

    return (
        <article className='product-body'>
            <div className="product-image">
                {imageSrc ? (
                    <img src={imageSrc} alt={title} loading="lazy" />
                ) : (
                    <div className="product-image-placeholder">Imagen no disponible</div>
                )}
            </div>
            <div className="product-info">
                <h3>{title}</h3>
                <p className="product-description">{description}</p>
                <p className="product-price">
                    <strong>{formattedPrice}</strong>
                </p>
            </div>
        </article>
    )
}

Product.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.node
}

Product.defaultProps = {
    title: 'Producto sin título',
    description: 'Sin descripción',
    price: 0,
    img: 'default.jpg'
};