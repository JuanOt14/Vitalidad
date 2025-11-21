import './Products.css';

//import components
import Product from '../components/Product';

//import data
import productsData from '../data/products.json';

export function Products() {
    return (
        <div className='products-root'>
            <section className='products' >
                <h3>Nuestros Productos</h3>
                <div className='products-container'>
                    {productsData.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </div>
    )
}