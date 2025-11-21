import './Home.css';

//import components
import Product from '../components/Product';

//import icons
import { Heart, Activity, DollarSign, Star } from 'react-feather';
import logo from '../assets/logo.png'

//import data
import productsData from '../data/products.json';

export function Home() {
    return (
        <div className='home-root'>
            <section className='home-main' id='inicio'>
                <p>¿Tienes un sueño?</p>
                <p>Queremos ser el puente</p>
                <p>entre tu sueño y la realidad</p>
                <button className='btn-primary'>Unete a nuestra organización</button>
            </section>
            <section className='home-msg'>
                <h3>Somos Gente que cuida a la gente, a toda la gente…</h3>
                <p>Nosotros creemos que todos los sueños son importantes y queremos ser el puente para que los alcances</p>
                <Heart strokeWidth={1} size={72} />
            </section>
            <section className='home-working-with' >
                <h3>Trabajamos con <b>OMNILIFE</b> y <b>SEYTÚ</b></h3>
                <p>Aquí encontrarás productos que nutrirán tu cuerpo, detonarán la expresión de tu personalidad y te inspirarán a transformar tu entorno.</p>
            </section>
            <section className='home-we-together' id='nosotros'>
                <div className='home-we-together-logo' >
                    <img src={logo} alt="" />
                </div>
                <img src="" alt="ELIZABETH GARCIA y LILIANA GARCIA" />
                <h4>Elizabeth García y Liliana García</h4>
                <h5>DECÍDETE Y CONVIERTETE EN EMPRESARIO OMNILIFE</h5>
                <p>
                    Estamos aquí para ayudarte a formar parte de esta gran familia. <br />
                    Te ofrecemos el mejor asesoramiento sobre los productos <b>OMNILIFE</b> y la mejor guía para impulsar tu negocio, además de otros beneficios al formar parte de esta gran empresa.
                </p>
            </section>
            <section className='home-benefits' id='beneficios'>
                <h3>Únete y llega tan alto como tú quieras</h3>
                <p>Incrementa tus oportunidades económicas con tu Negocio Independiente OMNILIFE.</p>
                <div className='home-benefits-elements'>
                    <article className='home-benefits-item'>
                        <Heart strokeWidth={1} size={60} />
                        <h4>Una oportunidad de <b>mejorar tu calidad de vida</b></h4>
                    </article>
                    <article className='home-benefits-item'>
                        <DollarSign strokeWidth={1} size={60} />
                        <h4>Obtener <b>nuevos ingresos</b></h4>
                    </article>
                    <article className='home-benefits-item'>
                        <Activity strokeWidth={1} size={60} />
                        <h4>Ayudar a gente a <b>mejorar su salud</b></h4>
                    </article>
                    <article className='home-benefits-item'>
                        <Star strokeWidth={1} size={60} />
                        <h4>Tu negocio te lleva a <b>cumplir tus sueños</b></h4>
                    </article>
                </div>
                <button className='btn-primary'>QUIERO UNIRME</button>
            </section>
            <section className='home-products' id='productos'>
                <h3>Productos</h3>
                <div className='home-products-container'>
                    {
                        productsData.map((item) => {
                            return (
                                <Product key={item.id} title={item.title} description={item.description} price={item.price} img={item.img} />
                            )
                        })
                    }
                </div>
                <h5>Cuída la salud y la de tu familia.</h5>
                <p>OMNILIFE es la empresa de mayor crecimiento en el mundo de los suplementos nutricionales, OMNILIFE te ofrece la oportunidad de mejorar tu salud, ¿deseas comprar productos ahora?</p>
            </section>
            <section className='home-join-us' id='unete'>
                <h3>Únete a nosotros</h3>
                <p>Estás a un paso de convertirte en un exitoso empresario</p>
                <button className='btn-primary'>Contactanos</button>
                <p>Estamos a tu entera disposición para cualquier duda o aclaración a través de WhatsApp y Redes Sociales</p>
            </section>
        </div>
    )
}

