import Arrow from './Arrow.svg'
import Avatar from './Avatar.svg';
import React, {useState} from 'react';
import './Header.css';

 export default function Header(props) {
  
  const [isOpened, setOpened] = useState(false);  

  return (
    <div className="header">
      <div className="container container-header">
        <h1 className="header__title">Awesome Kanban Board</h1>
        
        <div className="profile">
          <img src={Avatar} alt="Аватарка" />
          <div className="menu">
            <button className="menu__button"
                    onClick={() => setOpened(!isOpened)}
            > 
              <img 
                className={isOpened ? "arrow_open" : "arrow_closed"} 
                src={Arrow} 
                alt="Стрелка" 
                />
            </button>

            <div 
                className={isOpened ? "menu__content choice" : "menu__content"}
              >
              <button>My account</button>
              <button>My tasks</button>
              <button>Log Out</button>
            </div>
 
          </div> 
        </div>
      </div>
    </div>
  )
}
