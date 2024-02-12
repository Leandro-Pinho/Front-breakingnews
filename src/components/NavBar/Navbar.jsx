
import Logo from '../../images/logo.svg'

import "./navbar.css"


const Navbar = () => {
    return (
        <>
            <nav>
                <div className="input-search-space">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder='Pesquise por um titulo...' />
                </div>

                <img src={Logo} alt="logo da breaking news" />

                <button>Entrar</button>
            </nav>
        </>
    )
}

export default Navbar
