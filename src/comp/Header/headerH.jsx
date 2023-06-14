import { NavLink } from "react-router-dom";
import './header.css'

function HeaderHome() {
   return (
      <header className="Header">
         <nav role='navigation'>
            <div className="LogoHeader"> CloudUP</div>
            <div id="menuToggle">
               <input type="checkbox" />
               <span></span>
               <span></span>
               <span></span>
               <ul id="menu">
                  <li className="h2">CloudUP</li>
                  <a href="#Hero"><li>Головна</li></a>
                  <a href="#About"><li>Про Проект</li></a>
                  <a href="#Team"><li>Наша команда </li></a>
                  <a href="#Review"><li> Відгуки </li></a>
                  <li><NavLink to="/order"> Замовити </NavLink></li>
               </ul>
            </div>
         </nav>
      </header>
   );
}

export default HeaderHome