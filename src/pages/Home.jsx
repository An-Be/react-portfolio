import pfp from '../images/pfp.png';
import { FaNodeJs, FaReact, FaJava, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { TbCSharp } from 'react-icons/tb';
import { AiOutlineConsoleSql } from 'react-icons/ai'

const Home = () => {

    const iconSize = 40;
    
    return(
        <section>
            <div>
                <h1>Hello my name is</h1>
                <p>Andrea Berrocal</p>
                <img src={pfp} alt="andrea bitmoji" />
                <p>I have a knack for building cool things for the web</p>
                <p>I'm a software engineer currently focused in react.js. I have an interest in game development and Artificial Intelligence.</p>
                <div>
                    <a href="//"><FaReact size={iconSize}/></a>
                    <a href="//"><SiJavascript size={iconSize} /></a>
                    <a href="//"><FaHtml5 size={iconSize} /></a>
                    <a href="//"><FaCss3Alt size={iconSize} /></a>
                    <a href="//"><FaNodeJs size={iconSize} /></a>
                    <a href="//"><AiOutlineConsoleSql size={iconSize} /></a>
                    <a href="//"><FaPython size={iconSize} /></a>
                    <a href="//"><FaJava size={iconSize} /></a>
                    <a href="//"><TbCSharp size={iconSize} /></a>
                </div>
            </div>

        </section>
    )
}
export default Home;