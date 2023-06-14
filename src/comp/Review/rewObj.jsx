import './rewObj.css'
import avatar from "./img/avatar.jpg"


function RewObj({ name, text }) {
   return (
      <div className="RewObj">
         <div className="person">
            <img width={50} height={50} src={avatar} alt="avatar" className="avatar" />
            <div className="name">{name}</div>
         </div>
         <div className="text">{text}</div>
      </div>
   )
}

export default RewObj