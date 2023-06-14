
import './alert.css'
import alert from './img/alert.png'

const CustomAlert = ({ message, onClose }) => {
   return (
      <div className="AlertConteiner">
      <div className="Alert1"> </div>
         <div className="Alert">
            <img src={alert} alt="" />
            <p>{message}</p>
            <div className="div">
            <button onClick={onClose}>OK</button></div>
         </div>
      </div>
   );
};

export default CustomAlert