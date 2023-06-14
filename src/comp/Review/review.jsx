import './review.css'
import { useCurrency } from "../js/context";
import React, { Fragment, useState } from 'react';
import axios from 'axios';
import wb from '../../img/wb.svg'
import RewObj from './rewObj';
import { useEffect } from "react";
import CustomAlert from '../Alert/alert';

function Review() {

   const [reviewItem, setreviewItem] = useState(useCurrency());
   const [name, setName] = useState('');
   const [text, setText] = useState('');
   const [isAlertOpen, setIsAlertOpen] = useState(false);
   const [alertMessage, setAlertMessage] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (name.trim() === '') {
         setAlertMessage('Iмʼя не може бути відсутнє 🤓');
         setIsAlertOpen(true);
         return;
      }

      if (text.trim() === '') {
         setAlertMessage('Відгук не може бути порожнім 😅');
         setIsAlertOpen(true);
         return;
      }

      const formData = {
         name,
         text
      };

      try {
         const response = await axios.post('http://localhost:9093/reviews/add', formData);

         console.log('Response:', response.data);
         setName('');
         setText('');
      } catch (error) {
         console.error('Error:', error);
      }
   };

   useEffect(() => {
      function getReview() {
         axios.get("http://localhost:9093/reviews").then((response) => {
            setreviewItem(response.data);
         })
      };
      getReview();
   },)

   return (
      <ul id="Review">
         <div className="Review">
            <img className="waves" src={wb} alt="wb" />
            <div className="Review1">
               <form onSubmit={handleSubmit}>
                  <h1>Відгуки</h1>
                  <div class="input_data">
                     <label className='a'> Імʼя </label>
                     <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                     />
                  </div>
                  <div class="input_data">
                     <label className='b'> </label>
                     <input className='text'
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                     />
                  </div>
                  <button type="submit">Відправити</button>
               </form>
            </div>
         </div>
         {isAlertOpen && (
            <CustomAlert
               message={alertMessage}
               onClose={() => setIsAlertOpen(false)}
            />
         )}
         <Fragment>
            <div className="reviews">
               {reviewItem.map((el) => { return < RewObj key={el.id} name={el.name} text={el.text} /> })}
            </div>
         </Fragment>
      </ul>
   );
}

export default Review