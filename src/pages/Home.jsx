import pfp from '../images/pfp.jpg';
import { FaNodeJs, FaReact, FaJava, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa'
import { SiJavascript, SiSplunk } from 'react-icons/si'
import { TbCSharp } from 'react-icons/tb';
import { AiOutlineConsoleSql } from 'react-icons/ai'

const Home = () => {

    const iconSize = 40;
    
    return(
        <section className='home'>
            <div className='home-container'>
                <div className='personal-info'>
                    <h1>Hello my name is <span>Andrea Berrocal</span></h1>
                    <p>I have a knack for building cool things for the web. I'm a software engineer currently focused in react.js. I have an interest in game development and Artificial Intelligence. I currently work at American Express.</p>
                    <div className='technologies'>
                    <a href="//"><FaReact size={iconSize}/></a>
                    <a href="//"><SiJavascript size={iconSize} /></a>
                    <a href="//"><FaHtml5 size={iconSize} /></a>
                    <a href="//"><FaCss3Alt size={iconSize} /></a>
                    <a href="//"><FaNodeJs size={iconSize} /></a>
                    <a href="//"><AiOutlineConsoleSql size={iconSize} /></a>
                    <a href="//"><FaPython size={iconSize} /></a>
                    <a href="//"><FaJava size={iconSize} /></a>
                    <a href="//"><TbCSharp size={iconSize} /></a>
                    <a href="//"><SiSplunk size={iconSize} /></a>

                </div>
                </div>
                <div>
                <img src={pfp} alt="andrea bitmoji" width={200} />
                </div>
                
            </div>

        </section>
    )
}
export default Home;