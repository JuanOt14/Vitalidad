import './ProductDetail.css'

//import dependencies
import PropTypes from 'prop-types'
const images = import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,svg}', { eager: true });

export default function ProductDetail({ product = {}, title, description, price, img }) {

    const {
        title: pTitle,
        description: pDescription,
        price: pPrice,
        img: pImg
    } = product || {};

    const finalTitle = title ?? pTitle ?? 'Producto sin título';
    const finalDescription = description ?? pDescription ?? 'Sin descripción';
    const finalPrice = price ?? pPrice ?? 0;
    const finalImg = img ?? pImg ?? 'default.jpg';

    // Obtener la imagen directamente
    const imageModule = images[`/src/assets/images/${finalImg}`];
    const imageSrc = imageModule?.default;

    // Formatear el precio
    const formattedPrice = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(finalPrice);

    return (
        <article className='productDetail-body'>
            <div className="productDetail-image">
                {imageSrc ? (
                    <img src={imageSrc} alt={finalTitle} loading="lazy" />
                ) : (
                    <div className="productDetail-image-placeholder">Imagen no disponible</div>
                )}
            </div>
            <div className="productDetail-info">
                <h3>{finalTitle}</h3>
                <p>{finalDescription}</p>
                <p className="productDetail-price">
                    <strong>{formattedPrice}</strong>
                </p>
            </div>
        </article>
    )
}

ProductDetail.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        img: PropTypes.string
    }),
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string
}

ProductDetail.defaultProps = {
    product: PropTypes.shape({
        title: 'Producto sin título',
        description: 'Sin descripción',
        price: 0,
        img: 'default.jpg'
    }),
    title: 'Producto sin título',
    description: 'Sin descripción',
    price: 0,
    img: 'default.jpg'
};