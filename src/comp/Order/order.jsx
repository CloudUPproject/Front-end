import axios from 'axios';
import wb from '../../img/wb.svg'
import './order.css';
import React, { useState } from 'react';
import CustomAlert from '../Alert/alert';


function Order() {

   const [name, setName] = useState('');
   const [number, setNumber] = useState('');
   const [post, setPost] = useState('');
   const [isAlertOpen, setIsAlertOpen] = useState(false);
   const [alertMessage, setAlertMessage] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (name.trim() === '') {
         // window.alert('Iмʼя не може бути відсутнє');
         setAlertMessage('Iмʼя не може бути відсутнє 🤓');
         setIsAlertOpen(true);
         return;
      }

      if (number.trim() === '') {
         // window.alert('Номер не може бути відсутнім');
         setAlertMessage('Номер не може бути відсутнім 📞');
         setIsAlertOpen(true);
         return;
      }

      if (post.trim() === '') {
         // window.alert('Пошта не може бути відсутня');
         setAlertMessage('Пошта не може бути відсутня 📭');
         setIsAlertOpen(true);
         return;
      }

      const formData = {
         name,
         number,
         post
      };

      try {
         const response = await axios.post('http://localhost:9093/clients/add', formData);

         console.log('Response:', response.data);
         setName('');
         setNumber('');
         setPost('');
      } catch (error) {
         console.error('Error:', error);
      }
   };

   return (
      <ul id="Order">
         <div className="Order">
            <img className="waves" src={wb} alt="wb" />
            <div className="Order1">
               <form onSubmit={handleSubmit}>
                  <h1>Замовити</h1>
                  <div class="input_data">
                     <label className='a'> Імʼя </label>
                     <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                     />
                  </div>
                  <div class="input_data">
                     <label className='b'> Номер телефону </label>
                     <input
                        type="tel"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                     />
                  </div>
                  <div class="input_data">
                     <label className='c'>Ел. скринька</label>
                     <input
                        type="post"
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                     />
                  </div>
                  <button type="submit">Submit</button>
               </form>
            </div>
         </div>
         {isAlertOpen && (
            <CustomAlert
               message={alertMessage}
               onClose={() => setIsAlertOpen(false)}
            />
         )}
      </ul>
   );
}

export default Order