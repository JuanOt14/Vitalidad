import './App.css'

//import components
import Header from './components/Header'
import Product from './components/Product'

//import dependencies

//import data
import productsData from './products.json'

//import assets
import { Heart, Money, Health, Trophy } from 'akar-icons'

function App() {
  return (
    <div className='root'>
      <Header />
      <section className='main'>
        <p>¿Tienes un sueño?</p>
        <p>Queremos ser el puente</p>
        <p>entre tu sueño y la realidad</p>
        <button className='btn-primary'>Unete a nuestra organización</button>
      </section>
      <section className='msg'>
        <h3>Somos Gente que cuida a la gente, a toda la gente…</h3>
        <p>Nosotros creemos que todos los sueños son importantes y queremos ser el puente para que los alcances</p>
        <Heart strokeWidth={1} size={72} />
      </section>
      <section className='working-with'>
        <h3>Trabajamos con <b>OMNILIFE</b> y <b>SEYTÚ</b></h3> 
        <p>Aquí encontrarás productos que nutrirán tu cuerpo, detonarán la expresión de tu personalidad y te inspirarán a transformar tu entorno.</p>
      </section>
      <section className='we-together'>
        <h3>Vitalidad</h3>
        <img src="" alt="ELIZABETH GARCIA y LILIANA GARCIA" />
        <h4>Elizabeth García y Liliana García</h4>
        <h5>DECÍDETE Y CONVIERTETE EN EMPRESARIO OMNILIFE</h5>
        <p>
          Estamos aquí para ayudarte a formar parte de esta gran familia. <br />
          Te ofrecemos el mejor asesoramiento sobre los productos <b>OMNILIFE</b> y la mejor guía para impulsar tu negocio, además de otros beneficios al formar parte de esta gran empresa.
        </p>
      </section>
      <section className='benefits'>
        <h3>Únete y llega tan alto como tú quieras</h3>
        <p>Incrementa tus oportunidades económicas con tu Negocio Independiente OMNILIFE.</p>
        <div className='benefits-elements'>
          <article className='benefits-item'>
            <Heart strokeWidth={1} size={60} />
            <h4>Una oportunidad de <b>mejorar tu calidad de vida</b></h4>
          </article>
          <article className='benefits-item'>
            <Money strokeWidth={1} size={60} />
            <h4>Obtener <b>nuevos ingresos</b></h4>
          </article>
          <article className='benefits-item'>
            <Health strokeWidth={1} size={60} />
            <h4>Ayudar a gente a <b>mejorar su salud</b></h4>
          </article>
          <article className='benefits-item'>
            <Trophy strokeWidth={1} size={60} />
            <h4>Tu negocio te lleva a <b>cumplir tus sueños</b></h4>
          </article>
        </div>
        <button className='btn-primary'>QUIERO UNIRME</button>
      </section>
      <section className='products'>
        <h3>Productos</h3>
        <div className='products-container'>
          {
            productsData.map((item) => {
              return(
                <Product key={item.id} title={item.title} description={item.description} price={item.price} img={item.img} />
              )
            }) 
          }
        </div>
        <h5>Cuída la salud y la de tu familia.</h5>
        <p>OMNILIFE es la empresa de mayor crecimiento en el mundo de los suplementos nutricionales, OMNILIFE te ofrece la oportunidad de mejorar tu salud, ¿deseas comprar productos ahora?</p>
      </section>
      <section className='join-us'>
        <h3>Únete a nosotros</h3>
        <p>Estás a un paso de convertirte en un exitoso empresario</p>
        <button className='btn-primary'>Contactanos</button>
        <p>Estamos a tu entera disposición para cualquier duda o aclaración a través de WhatsApp y Redes Sociales</p>
      </section>
    </div>
  )
}

export default App

/*
productsData.map((item) => {
  return (
    <Product key={item.id} title={item.title} description={item.description} price={item.price} img={item.img} />
  )
})
  */