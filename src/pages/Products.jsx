import './Products.css';

//import components
import ProductDetail from '../components/ProductDetail';

//import data
import productsData from '../data/products.json';

export function Products() {
    return (
        <div className='products-root'>
            <section className='products-body' >
                <h2>Nuestros Productos</h2>
                <div className='products-container'>
                    {
                        productsData.map((product) => (
                            <ProductDetail key={product.id} {...product} />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}