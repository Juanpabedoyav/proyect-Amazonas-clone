import { FooterStyle } from  '../styles/Footer.style'
import logoAmazon from '../assets/logoAmazon.svg'  

const Footer = () => {
    return (
        <>
        <FooterStyle>
            <div className='container-footer'>
            <div className='card-footer'>
                <ul>
                    <h1>Conócenos</h1>
                    <li>Trabajar en Amazon</li>
                    <li>Información corporativa</li>
                    <li>Departamento de prensa</li>
                </ul>
            </div>
            <div className='card-footer'>
            <ul>
                    <h1>Gana dinero con nosotros</h1>
                    <li>Vender en Amazon</li>
                    <li>Vender en Amazon Handmade</li>
                    <li>Publica tu libro en Kindle</li>
                    <li>Programa de afiliados</li>
                    <li>Anuncia tus productos</li>


                </ul>
            </div>
            <div className='card-footer'>
            <ul>
                    <h1>Podemos ayudarte</h1>
                    <li>Trabajar en Amazon</li>
                    <li>Información corporativa</li>
                    <li>Departamento de prensa</li>
                </ul>
            </div>
            <div className='card-footer'>
            <ul>
                    <h1>Métodos de pago</h1>
                    <li>Trabajar en Amazon</li>
                    <li>Información corporativa</li>
                    <li>Departamento de prensa</li>
                </ul>   
            </div>
         </ div>
         <img  className='img-footer' src={logoAmazon} alt="" />

        </FooterStyle>

        </>
    )
}

export default Footer
