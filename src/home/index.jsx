import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className="container">
            <h2>Conheça carros interessantes!</h2>
            <div className="buttons-container">
                <Link to="/cars">
                    <button className="brand-button">Conhecer!</button>
                </Link>
              {/*   <Link to="/bmw">
                    <button className="brand-button">BMW</button>
                </Link>
                <Link to="/bugatti">
                    <button className="brand-button">Bugatti</button>
                </Link>
                <Link to="/ferrari">
                    <button className="brand-button">Ferrari</button>
                </Link>
                <Link to="/koenigsegg">
                    <button className="brand-button">Koenigsegg</button>
                </Link> 
                <Link to="/maserati">
                    <button className="brand-button">Maserati</button>
                </Link> 
                <Link to="/mclaren">
                    <button className="brand-button">Mclaren</button>
                </Link> 
                <Link to="/mercedes">
                    <button className="brand-button">Mercedes</button>
                </Link> 
                <Link to="/nissan">
                    <button className="brand-button">Nissan</button>
                </Link> 
                <Link to="/pagani">
                    <button className="brand-button">Pagani</button>
                </Link> 
                <Link to="/porsche">
                    <button className="brand-button">Porsche</button>
                </Link>  */}
            </div>
        </div>
    );
}

export default Home;
