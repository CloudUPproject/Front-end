import './team.css'
import den from './img/den.jpg'
import nazya from './img/i.jpg'
import andriy from './img/andriy.jpg'
import demian from './img/dem.jpeg'
import roman from './img/roman.jpg'

function Team() {
   return (
      <ul id="Team">
         <div className="Team">
            <h1 > Our team</h1>
            <div className="all">
               <div className="one">
                  <div className="info">
                     <h2>Team lead</h2>
                     <h3>Данилюк Денис </h3>
                     <ul>
                        <li> Автор ідеї</li>
                        <li> Cтворення презентації</li>
                     </ul>
                  </div>
                  <img src={den} width={400} height={400} alt="den" className="photo" />
               </div>
               <div className="one">
                  <img src={nazya} width={400} height={400} alt="nazya" className="photo" />
                  <div className="info">
                     <h2> Developer</h2>
                     <h3>Заставний Назарій </h3>
                     <ul>
                        <li>Розробка сайту (React) </li>
                        <li>Cтворення бази даних (MySQL) </li>
                        <li>Написання бекенду (Java) </li>
                     </ul>
                  </div>
               </div>
               <div className="one">
                  <div className="info">
                     <h2>Engineer</h2>
                     <h3>Парило Андрій </h3>
                     <ul>
                        <li>Виправлення тех. проблем </li>
                        <li>Робота над двигуном </li>
                     </ul>
                  </div>
                  <img src={andriy} width={400} height={400} alt="andriy" className="photo" />
               </div>
               <div className="one">
                  <img src={demian} width={400} height={400} alt="nazya" className="photo" />
                  <div className="info">
                     <h2>Business analytic</h2>
                     <h3> Кучер Дем'ян </h3>
                     <ul>
                        <li>Бізнес-аналіз </li>
                        <li>Маркетинг</li>
                     </ul>
                  </div>
               </div>
               <div className="one">
                  <div className="info">
                     <h2>Team lead</h2>
                     <h3>Тарнавський Роман </h3>
                     <p className="ab"> </p>
                  </div>
                  <img src={roman} width={400} height={400} alt="den" className="photo" />
               </div>
            </div>
         </div>
      </ul>
   )
}

export default Team