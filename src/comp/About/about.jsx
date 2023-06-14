import './about.css'
import ds from './img/ds.gif'
import st from './img/st.jpeg'
import wb from '../../img/wb.svg'

function About() {
   return (
      <ul id="About">
      <div className="About">
         <div className="color">
            <h1>Про проєкт</h1>
            <div className="abt">
               <div className="par">
                  <p>В нашому проекті буде використовуватися двигун стірлінга,
                     який був придуманий в 1861 році Робертом Стірлінгом. Ефективність
                     двигуна Стирлінга більша за двигуни внутрішнього згоряння через простоту конструкції
                     і також ризик несправності цього двигуна набагато менший.</p>
                  <img src={st} width={200} height={200} alt="st" />
               </div>
               <div className="par">
                  <img src={ds} width={200} height={200} alt="ds" />
                  <div className="">
                     <p> Двигун працює від нагрівання повітря
                        за допомогою побутового газу в циліндрі, саме тому механізм працює.</p>
                     <p>Саме цю технологію ми будемо використовувати
                        в наших генераторах. Підключіть наш генератор до побутового газу
                        і забудьте про зникання світла. </p>
                  </div>
               </div>
            </div>
         </div>
         <img className="waves" src={wb}  alt="wb" />
      </div>
      </ul>
   )
}

export default About