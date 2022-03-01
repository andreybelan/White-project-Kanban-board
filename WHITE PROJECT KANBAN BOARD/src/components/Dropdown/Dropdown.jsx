import React from 'react'
import '../Dropdown/Dropdown.css'

export default function Dropdown(props) {
  const {tasks, setTasks, title} = props;

  let selectTasks;
    if (title === 'Ready') {
      selectTasks = tasks.find(num => num.title === 'Backlog')
    } else if (title === 'In Progress') {
      selectTasks = tasks.find(num => num.title === 'Ready')
    } else if (title === 'Finished') {
      selectTasks = tasks.find(num => num.title === 'In Progress')
  } 

  const movingTasks = e => {
    const newTasks = tasks.map(board => {
      let tasksId = +e.target.value;
      let newTask = selectTasks.text.find(obj => obj.id === tasksId)
      
      if(board.title === selectTasks.title){
        return {...board, text: selectTasks.text.filter(task => task.id !== tasksId)}
      }
      if (board.title === title) {
        return {...board, text: [...board.text, newTask]}
      }
      return board
    })
    setTasks(newTasks)
  }

  return (
    <>
      <div className='dropdown'>
        <select name="select"
                className="dropdown__select"
                onChange={movingTasks}
        >
          <option value="1">Choose texts</option>

          {selectTasks.text.map(el => {
            return (
              <option key={Math.random() * 19} 
                      value={el.id} 
              >
                {el.task}
              </option>  
            )
          })}    
        </select>
      </div>
    </>
  )
}

  









