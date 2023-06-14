import './header.css'
import { NavLink } from "react-router-dom";

function HeaderOrder() {

   return (
      <header className="Header">
         <nav role='navigation'>
            <div className="LogoHeader"> CloudUP</div>
            <button className="goback" ><NavLink  to="/"> Go Back </NavLink></button>
         </nav>
      </header>
   );
}

export default HeaderOrder