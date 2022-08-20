import { Link } from 'react-router-dom';
const Header = () => {


    return(
        <header>
            <h2 className='icon'>AB</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
        
    );

}
export default Header;