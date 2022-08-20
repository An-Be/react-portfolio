import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SideBar = () => {

    return(
        <footer className='sidebar'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <a href="https://github.com/An-Be"><FiGithub/></a>
            <a href="https://www.linkedin.com/in/andrea-berrocal-/"><FiLinkedin /></a>
            <a href="https://www.instagram.com/and__be/"><FiInstagram /></a>
            <a href="https://twitter.com/Ancarobe"><FiTwitter/></a>

        </footer>
    )

}
export default SideBar;