import './Product.css'

//import dependencies
import PropTypes from 'prop-types'
const images = import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,svg}', { eager: true });

export default function Product({ title, description, price, img }) {

    let imageFunc = images[`/src/assets/images/${img}`]
    let itemObj = {
        imgFunc : imageFunc
    }

    return (
        <article className='product-body'>
            <div className="product-image">
                {
                    Object.keys(itemObj).map((imagePath, index) => {
                        const image = images[`/src/assets/images/${img}`].default
                        return <img key={index} src={image} alt={title}/>
                    })
                }
            </div>
            <div className="product-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{`$${price}`}</p>
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