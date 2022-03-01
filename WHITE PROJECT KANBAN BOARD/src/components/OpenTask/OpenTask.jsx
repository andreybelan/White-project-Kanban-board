import { Link, useParams } from 'react-router-dom'
import React from 'react'
import '../OpenTask/OpenTask.css'
import x from './x.svg'

export default function OpenTask(props) {
  const { tasks, setTasks } = props;
  const taskId = useParams();

  const task = tasks.find(num => {
    return num.text.find(obj => {
      if(obj.id === +taskId.undefined){
          return obj
        }
      return false;          
    })
  })

  const getNewTasks = (e) => {
    let newDescript = task.text.map(obj => {
      return {...obj, description: e.target.value};
    });

    const newTasks = tasks.map(num => {
      if(num.title === task.title){
        return {...num, text: newDescript}
      }
      return num;
    })
    setTasks(newTasks);
  }

  return (
    <>
      <div className='task'>
        <div className='wrapper'><Link to='/' className='wrapper__link'><img src={x} alt="X" width='30px' height='30px'/></Link></div>
        
        <h1 className='task__title'>
          {task.text[0].task}
        </h1>
        <textarea 
          className='task__discription' 
          defaultValue={task.text[0].description}
          onChange={getNewTasks} 
        />
      </div> 
    </>
  )
}
