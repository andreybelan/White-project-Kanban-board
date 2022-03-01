import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import './Main.css';
import OpenTask from '../OpenTask/OpenTask';
import Button from '../Button/Button';

export default function Main(props) {
  const { tasks } = props;
  const { taskId } =  useParams();

  const Board = () => tasks.map(num => {
    return  <div className='todo' key={Math.random() * 19}>
              <h2 className='todo__title'>{num.title}</h2>
              {num.text.length 
              ? num.text.map(obj => {
                return  <Fragment key={Math.random() * 19}>
                          <Link to={`/task/${obj.id}`} key={obj.id} className='todo__link'>
                            <div className="todo__text" value={obj.id}> { obj.task } </div>
                          </Link>
                        </Fragment>})
              :
              <>  <div className="todo__text_no"> Create a task </div>  </>}
              <Button {...props} title={num.title} length={num.text.length}/>
            </div>
  })

  return (
    <BrowserRouter>
      <div className="main">
        <div className="container container-main"> 
          <Routes>
            <Route path='/' element={<Board />} />
            <Route path={`/task/:${taskId}`} element={ <OpenTask {...props}/> } /> 
          </Routes>
        </div>                
      </div>
    </BrowserRouter>
  )
}

