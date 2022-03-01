import Dropdown from '../Dropdown/Dropdown';
import Input from '../Input/Input';
import React, { useState } from 'react'
import Plus from '../Main/Plus.svg';
import './Button.css'

export default function Button(props) {
  const [btnCondition, setBtnCondition] = useState(false);
  const { length, title } = props;

  const getTitle = tit => {
    if(tit === 'Backlog'){
       return true;
    }
    return false;
  }
  return (
    <>
      {btnCondition 
        ?
        <>
          {
            getTitle(title) 
          ? 
            <Input {...props}/>  
          : 
            <Dropdown {...props}/>
          }
        </>
        :
        <> 
          {length < 1
            ?
              <button className="todo__button todo__button_active" onClick={() => setBtnCondition(!btnCondition)}>
              <img src={Plus} alt="Плюс"/> Add card </button>

            :
              <button className="todo__button" >
              <img src={Plus} alt="Плюс"/> Add card </button>
          }        
        </>
      }
    </>  
  )
}