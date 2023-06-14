import './hero.css'
import video from './img/main.mp4'
import { NavLink } from "react-router-dom";

function Hero() {
   return (
      <ul id="Hero">
         <div className='Hero'>
            <video src={video} autoPlay loop muted />
            <div className="color">
               <div className="text">
                  <span className='hn'>CloudUP</span>
                  <span className='motto'>Just charge it</span>
               </div>
            </div>
            <button className="glow-on-hover">
               <NavLink to="/order"> Замовити </NavLink>
            </button>
         </div>
      </ul>
   );
}

export default Hero