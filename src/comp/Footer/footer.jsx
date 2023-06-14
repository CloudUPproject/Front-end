import './footer.css'
import inst from './img/insta.png'
import tg from "./img/tg.png"
import fb from "./img/fb.png"

function Footer() {
   return (
      <div className="Footer">
         <hr />
         <div className="contactUs">
            <label>Contact US</label>
            <ul>
               <li><a href="tel: 0677090745" className="tel">+38 067 709 07 45</a></li>
               <li><a href="mailto:cloudup.iot@gmail.com" className="gmail">CloudUP.IoT@gmail.com</a></li>
               <li><a href="https://www.google.com/maps/place/5-%D0%B9+%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81+%D0%9D%D0%A3+%E2%80%9C%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BF%D0%BE%D0%BB%D1%96%D1%82%D0%B5%D1%85%D0%BD%D1%96%D0%BA%D0%B0%E2%80%9D/@49.834827,24.006738,17z/data=!4m15!1m8!3m7!1s0x473add78db3397cf:0xb5f423e0fa824d09!2z0LLRg9C70LjRhtGPINCh0YLQtdC_0LDQvdCwINCR0LDQvdC00LXRgNC4LCAzMCwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!3b1!8m2!3d49.834827!4d24.006738!16s%2Fg%2F11gfl0cn8_!3m5!1s0x473add8e0d340f09:0x699fc00c7adebdd8!8m2!3d49.8349796!4d24.0080744!16s%2Fg%2F11q1cym01_?entry=ttu" className="map">S.Bandery 30, Lviv</a></li>
               <li>
                  <ul className="media">
                     <li><a href="https://instagram.com/den4ik_____18?igshid=OGQ5ZDc2ODk2ZA=="><img src={inst} alt="inst" /></a></li>
                     <li><a href="https://t.me/nazyazast"><img src={tg} alt="telegram" /></a></li>
                     <li><a href="https://www.facebook.com/p/Zenoviy-Veres-100010731095427/?locale=uk_UA"><img src={fb} alt="telegram" /></a></li>
                  </ul>
               </li>
            </ul>
         </div>
         <div className="logo">CloudUP</div>

      </div>
   )

}

export default Footer