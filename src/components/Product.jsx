import './Product.css'

//import dependencies
import PropTypes from 'prop-types'
const images = import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,svg}', { eager: true });

export default function Product({ title, img }) {

    // Obtener la imagen directamente
    const imageModule = images[`/src/assets/images/${img}`];
    const imageSrc = imageModule?.default;

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
            </div>
        </article>
    )
}

Product.propTypes = {
    title: PropTypes.string,
    img: PropTypes.node
}

Product.defaultProps = {
    title: 'Producto sin título',
    img: 'default.jpg'
};