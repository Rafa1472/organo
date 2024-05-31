import './Footer.css'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer-sociais'>
                <img src='/imagens/fb.png' alt='logo facebook' />
                <img src='/imagens/tw.png' alt='logo twitter' />
                <img src='/imagens/ig.png' alt='logo instagram' />
            </div>
            <div className='footer-logo'>
                <img src='/imagens/logo.png' alt='logo organo' />
            </div>
            <div className='footer-criador'>
                Desenvolvido por Rafael
            </div>
        </section>
    )
}

export default Footer